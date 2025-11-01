import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

export function LikeComponent() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [likes, setLikes] = useState();


    async function handleLikes(type) {

        const vid = searchParams.get('vid');

        let token = localStorage.getItem("token");

        let reps = await fetch(`${BACKEND_URL}/api/v1/like`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                authorization: "auth " + token,
            },
            body: JSON.stringify({
                vid: vid,
                ratingType: type
            })
        })

        let json = await reps.json();
        if (json.status == "success") {
            setLikes(json.data.likes);
        }
    }

    async function loadLikes() {

        const vid = searchParams.get('vid');
        let reps = await fetch(`${BACKEND_URL}/api/v1/like?vid=${vid}`)

        let json = await reps.json();
        if (json.status == "success") {
            setLikes(json.data.likes);
        }
    }

    useEffect(() => {
        loadLikes()
    }, [])


    return <div className="vote-cont">
        <div className="likes">{likes}</div>
        <input type="button" value="like" onClick={() => { handleLikes("upvote") }} />
        <input type="button" value="dislike" onClick={() => { handleLikes("downvote") }} />
    </div>
}