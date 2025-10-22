import { createmysqlconnection } from "../utils/dbutil.js";

export async function addComment(req, res) {
    const comment = req.body.comment;
    const vid = req.body.vid;
    const uid = req.userdetails.uid;    

    try {
        const conn = await createmysqlconnection();
        await conn.execute("INSERT INTO comments(vid , uid , text) VALUES(? , ? , ?)", [vid, uid, comment]);
        res.json({
            status: "success",
        });
    }
    catch (err) {
        console.log(err);     
        res.status(400).json({
            status: "fail",
            msg: "failed to add comment",
        });
        return;
    }
}

export async function loadComment(req, res){
    const vid = req.query.vid;

    try {
        const conn = await createmysqlconnection();
        let [result] = await conn.execute("SELECT username, text, cid FROM comments JOIN users ON comments.uid = users.uid where comments.vid = ?;", [vid]);

        let comments = []
        for(let i = 0 ; i < result.length ; i++){
            comments.push({username: result[i].username, comment: result[i].text, cid: result[i].cid})
        }

        res.json({
            status: "success",
            comments: comments
        });
    }
    catch (err) {
        console.log(err);     
        res.status(400).json({
            status: "fail",
            msg: "failed to add comment",
        });
        return;
    }   
}