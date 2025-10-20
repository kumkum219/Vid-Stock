import { createmysqlconnection } from "../utils/dbutil.js";
export async function createUser(req, res) {
    let username = req.body.username;
    let password = req.body.password;

    const conn = await createmysqlconnection();
    const [results, fields] = await conn.execute("INSERT INTO users(username , password) values(? , ?)", [username, password]);

    console.log("users result = ", results);
    res.json({
        status : "success",
        msg : "user signup successfully"
    });
};


export async function verifyUser(req , res) {
    let username = req.body.username;
    let password = req.body.password;

    const conn = await createmysqlconnection();
    const [results, fields] = await conn.execute("SELECT uid , username from users WHERE username = ? AND password = ?" ,[username , password]);

    console.log("users result = ", results);
    if(results.length == 1){
        res.json({
        status : "success",
        msg : "user logged in successfully"
    });
    }else {
        res.json({
        status : "failed",
        msg : "wrong users detailed"
    });
    }
};
