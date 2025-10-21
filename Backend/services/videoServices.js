import { createmysqlconnection } from "../utils/dbutil.js";

export async function uploadVideo(req, res) {

    const filename = req.file.filename;
    const uid = req.userdetails.uid;

    const conn = await createmysqlconnection();
    const [results, fields] = await conn.execute("INSERT INTO videos(uid, name) values(?, ?);", [uid, filename]);

    res.json({
        status: "success",
        msg: "Video Uploaded Successfully",
        data: filename
    });

}
