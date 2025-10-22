
import { Router } from "express";
import { isRequestAuthenticated } from "../utils/authutils.js";
import { addComment } from "../services/commentservice.js";

const commentRouter = Router();

commentRouter.get("/" , (req , res) => {
    res.send("cooment");
});
commentRouter.post("/" , isRequestAuthenticated , addComment);

export default commentRouter;