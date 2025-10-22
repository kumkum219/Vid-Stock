import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function VideoComponent() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [videoName, setVideoName] = useState(null);
    const vid = searchParams.get('vid');


    async function loadVideoName() {
        let resp = await fetch(`${BACKEND_URL}/api/v1/video?vid=${vid}`)
        let json = await resp.json();
        console.log({ vidJson: json });

        setVideoName(json.data);
    }

    useEffect(() => {
        loadVideoName();
    }, [])

    return <div className="cont">
        {videoName == null ?
            <div>Fetching VideoName</div> :
            <video
                width="640"
                height="360"
                controls
                src={`${BACKEND_URL}/api/v1/video/${videoName}`}
            >
                Your browser does not support the video tag.
            </video>
        }

    </div>
}