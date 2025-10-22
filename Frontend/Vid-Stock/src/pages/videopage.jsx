import { LikeComponent } from "../components/LikeComponent";
import { CommentComponent } from "../components/CommentComponent";
import VideoComponent from "../components/VideoComponent";


export function VideoPage() {
 
    return <div>
        <VideoComponent></VideoComponent>
        <LikeComponent></LikeComponent>
       <CommentComponent></CommentComponent>
    </div>

}
