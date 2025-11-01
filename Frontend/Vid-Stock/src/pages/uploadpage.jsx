import { useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

export function UploadPage() {

    const [videoName, setVideoName] = useState("");
    const [file, setFile] = useState();

    async function upload() {
        const formdata = new FormData();
        formdata.append("video", file);
        formdata.append("name", videoName);

        let token = localStorage.getItem("token");


        let reps = await fetch(`${BACKEND_URL}/api/v1/video`, {
            method: 'POST',
            headers: {
                authorization: "auth " + token,
            },
            body: formdata
        })

        let json = await reps.json();

        console.log({json})
        if (json.status == "success") {
            console.log(`Message ${json.msg} :: data ${json.data}`);
        }
        if (json.status == "failed") {

        }
    }

    return <div className="cont">
        <form className="login-form">
            <div className="input-cont">
                <label>VideoName</label>
                <input type="text" onChange={(e) => (setVideoName(e.target.value))} value={videoName}></input>
            </div>
            <div className="input-cont">
                <label>File</label>
                <input type="file" onChange={(e) => (setFile(e.target.files[0]))} ></input>
            </div>
            <input type="button" className="btn" onClick={upload} value="Upload"></input>
        </form>
    </div>

}