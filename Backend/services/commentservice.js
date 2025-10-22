import { createmysqlconnection } from "../utils/dbutil.js";

export async function addComment(req, res) {
    const comment = req.body.comment;
    const vid = req.body.vid;
    const uid = req.body.uid;

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