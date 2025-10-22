
import { Router } from "express";
import { isRequestAuthenticated } from "../utils/authutils.js";
import { addComment, loadComment } from "../services/commentservice.js";

const commentRouter = Router();

commentRouter.get("/" , loadComment);
commentRouter.post("/" , isRequestAuthenticated , addComment);

export default commentRouter;