import { createmysqlconnection } from "../utils/dbutil.js";
import jwt from 'jsonwebtoken';


export async function createUser(req, res) {
    let username = req.body.username;
    let password = req.body.password;

    const conn = await createmysqlconnection();
    const [results, fields] = await conn.execute("INSERT INTO users(username , password) values(? , ?)", [username, password]);

    console.log("users result = ", results);
    res.json({
        status: "success",
        msg: "user signup successfully"
    });
};


export async function verifyUser(req, res) {
    let username = req.body.username;
    let password = req.body.password;

    const conn = await createmysqlconnection();
    const [results, fields] = await conn.execute("SELECT uid , username from users WHERE username = ? AND password = ?", [username, password]);


    if (results.length == 0) {
        res.json({
            status: "failed",
            msg: "wrong users detailed"
        }); 
        return;
    }

    const uid = results[0]["uid"];
    const cusername = results[0]["username"];

    const JWT_SECRET = process.env.JWT_SECRET;
    const resJwt = jwt.sign({ username: cusername, uid: uid }, JWT_SECRET);

    console.log("users result = ", results);
    res.json({
        status: "success",
        msg: "user logged in successfully",
        data: resJwt
    });

};
