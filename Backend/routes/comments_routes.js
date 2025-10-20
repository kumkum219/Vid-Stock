
import { Router } from "express";
import { isRequestAuthenticated } from "../utils/authutils";

const commentRouter = Router();

commentRouter.get("/" , (req , res) => {
    res.send("cooment");
});
commentRouter.post("/" , isRequestAuthenticated , (req , res) => {
    res.send("login");
});

export default commentRouter;