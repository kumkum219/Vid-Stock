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

        const [result] = await conn.execute("select likes from videos where vid = ?", [vid]);
        
        res.json({
            status: "success",
            data : {
                likes: result[0].likes
            }
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


export async function getLikes(req, res) {
    const vid = req.query.vid;

    try {
        const conn = await createmysqlconnection();
        const [result] = await conn.execute("select likes from videos where vid = ?", [vid]);
        
        res.json({
            status: "success",
            data : {
                likes: result[0].likes
            }
        });
    }
    catch (err) {
        console.log(err);     
        res.status(400).json({
            status: "fail",
            msg: "failed to fetch likes",
        });
        return;
    }
}