import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export function CommentComponent() {

    const [searchParams, setSearchParams] = useSearchParams();

    const vid = searchParams.get('vid');
    const [comment, setComment] = useState("");
    const [videoComments, setVideoComments] = useState([]);


    function createCommentComp() {
        let commentsElems = [];
        for (let i in videoComments) {
            let c = videoComments[i]
            commentsElems.push(<div className="comment-cont" key={c.cid}>
                <div>{`UserName: ${c.username}`}</div>
                <div>{`Comment: ${c.comment}`}</div>
            </div>
            )
        }
        return commentsElems;
    }

    const loadComments = async () => {
        let reps = await fetch(`${BACKEND_URL}/api/v1/comment?vid=${vid}`)
        let json = await reps.json();

        console.log("Video Comments", json);

        if (json.status == "success") {
            setVideoComments(json.comments)
        }
    }

    useEffect(() => {
        loadComments();
    }, [])

    async function addComment() {
        let postData = {
            "vid": vid,
            "comment": comment
        }

        let token = localStorage.getItem("token");

        let reps = await fetch(`${BACKEND_URL}/api/v1/comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': "auth " + token,
            },
            body: JSON.stringify(postData)
        })

        let json = await reps.json();

        if (json.status == "success") {
            loadComments()
        }
        if (json.status == "failed") {

        }
        console.log({ json });
    }

    return <div className="comment-cont">
        <div className="comment-input-cont">
            <input type="text" onChange={(e) => { setComment(e.target.value) }} value={comment} />
            <input type="button" value="Add Comment" onClick={addComment} />
        </div>
        <div className="comments-cont">{createCommentComp()}</div>
    </div>
}