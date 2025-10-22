import { createmysqlconnection } from "../utils/dbutil.js";

export async function handleLikes(req, res) {
    const ratingType = req.body.ratingType;

    const vid = req.body.vid;

    try {
        const conn = await createmysqlconnection();
        if (ratingType == "upvote")
            await conn.execute("UPDATE videos SET likes = likes + 1 WHERE vid = ?;", [vid]);

        if (ratingType == "downvote")
            await conn.execute("UPDATE videos SET likes = likes - 1 WHERE vid = ?;", [vid]);

        res.json({
            status: "success",
        });
    }
    catch (err) {
        console.log(err);     
        res.status(400).json({
            status: "fail",
            msg: "failed to update likes",
        });
        return;
    }
}