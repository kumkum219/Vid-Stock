
import { Router } from "express";

const likeRouter = Router();

likeRouter.put("/" , (req , res) => {
    res.send("loginlike");
});

export default likeRouter;