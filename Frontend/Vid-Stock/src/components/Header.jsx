import { Link } from "react-router-dom";

export default function Header(){
    return <div className="header">
        <Link to={"/login"}>Login</Link>
        <Link to={"/upload"}>Upload</Link>
        <Link to={"/video"}>Videos</Link>
    </div>
}