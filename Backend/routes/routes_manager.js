import { Router } from "express";
import likeRouter from "./like_routes.js";
import commentRouter from "./comments_routes.js";
import userRouter from "./user_routes.js";
import videoRouter from "./video_routes.js";
import { isRequestAuthenticated } from "../utils/authutils.js";

const routerManager = Router();

routerManager.use("/like", isRequestAuthenticated , likeRouter);
routerManager.use("/comment" , commentRouter);
routerManager.use("/user" , userRouter);
routerManager.use("/video" , videoRouter);

export default routerManager;