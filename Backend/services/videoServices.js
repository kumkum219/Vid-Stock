import { createmysqlconnection } from "../utils/dbutil.js";

export async function uploadVideo(req, res) {
    console.log({ File: req.file });

    const filename = req.file?.filename;
    const videoname = req.body.name;
    const uid = req.userdetails.uid;

    try {
        const conn = await createmysqlconnection();
        const [results, fields] = await conn.execute("INSERT INTO videos(uid, videoname, location) values(?, ?, ?);", [uid, videoname, filename]);
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

export async function getVideoName(req, res) {
    const vid = req.query.vid;

    try {
        const conn = await createmysqlconnection();
        const [result] = await conn.execute("SELECT location FROM videos WHERE vid = ?", [vid]);

        res.json({
            status: "success",
            data: result[0].location
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            msg: "failed to fetch video name",
        });
        return;
    }
}
