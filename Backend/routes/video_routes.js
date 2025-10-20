
import { Router } from "express";
import { isRequestAuthenticated } from "../utils/authutils";

const videoRouter = Router();

videoRouter.get("/" , (req , res) => {
    res.send("login");
});
videoRouter.post("/" , isRequestAuthenticated , (req , res) => {
    res.send("login");
});

export default videoRouter;