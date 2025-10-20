
import { Router } from "express";
import { isRequestAuthenticated } from "../utils/authutils.js";
import multer from "multer";

const videoRouter = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

videoRouter.get("/", (req, res) => {
    res.send("login");
});
videoRouter.post("/", isRequestAuthenticated, upload.single('video'), (req, res) => {
    console.log(req.file);
    res.json({
        status : "success",
        msg : "user signup successfully"
    });
});



export default videoRouter;