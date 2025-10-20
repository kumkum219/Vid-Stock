import { Router } from "express";
import { createUser, verifyUser } from "../services/userservices.js";

const userRouter = Router();

userRouter.post("/" , createUser);
userRouter.post("/login" , verifyUser);

export default userRouter;