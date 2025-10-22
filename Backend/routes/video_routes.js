
import express, { Router } from "express";
import { isRequestAuthenticated } from "../utils/authutils.js";
import multer from "multer";
import { getVideoName, uploadVideo } from "../services/videoServices.js";
import path from "path";
import { fileURLToPath } from "url";


const uploadPath = path.join(process.cwd(), "uploads");

console.log({uploadPath,});


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

videoRouter.use("/", express.static(uploadPath));
videoRouter.post("/", isRequestAuthenticated, upload.single('video'), uploadVideo, (req, res) => {
    console.log(req.file);
    res.json({
        status : "success",
        msg : "user signup successfully"
    });
});

videoRouter.get("/", getVideoName);



export default videoRouter;