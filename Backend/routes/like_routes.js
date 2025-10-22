
import { Router } from "express";
import { getLikes, handleLikes } from "../services/likeservices.js";
import { isRequestAuthenticated } from "../utils/authutils.js";

const likeRouter = Router();

likeRouter.put("/" ,isRequestAuthenticated, handleLikes);
likeRouter.get("/", getLikes);

export default likeRouter;