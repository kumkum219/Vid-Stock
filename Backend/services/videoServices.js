import { createmysqlconnection } from "../utils/dbutil.js";

export async function uploadVideo(req, res) {
    console.log({File: req.file});

    const filename = req.file?.filename;
    const uid = req.userdetails.uid;

    try {
        const conn = await createmysqlconnection();
        const [results, fields] = await conn.execute("INSERT INTO videos(uid, name) values(?, ?);", [uid, filename]);
        res.json({
            status: "success",
            msg: "Video Uploaded Successfully",
            data: filename
        });

    }
    catch (err) {
        console.log(err);     
        res.status(400).json({
            status: "fail",
            msg: "failed to add video",
        });
        return;
    }

}
