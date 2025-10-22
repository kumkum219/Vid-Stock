
import { Router } from "express";
import { handleLikes } from "../services/likeservices.js";

const likeRouter = Router();

likeRouter.put("/" , handleLikes);

export default likeRouter;