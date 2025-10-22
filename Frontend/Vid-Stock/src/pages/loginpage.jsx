import { useState } from "react"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function login() {
        console.log("login");
        let postData = {
            "username": username,
            "password": password
        }

        let reps = await fetch(`${BACKEND_URL}/api/v1/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })

        let json = await reps.json();

        if(json.status == "success"){
            let token = json.data;
            localStorage.setItem("token" , token);
            console.log({token});
        }
        if(json.status == "failed"){
            
        }
        console.log({json});
    };

    async function signup() {
        console.log("signup");
        let postData = {
            "username": username,
            "password": password
        }

        let reps = await fetch(`${BACKEND_URL}/api/v1/user/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })

        let json = await reps.json();

        if(json.status == "success"){

        }
        if(json.status == "failed"){
            
        }
        console.log({json});
        
    };

    return <div className="cont">
        <form className="form">
            <div className="input-cont">
                <label>Username</label>
                <input type="text" onChange={(e) => (setUsername(e.target.value))} value={username}></input>
            </div>
            <div className="input-cont">
                <label>Password</label>
                <input type="password" onChange={(e) => (setPassword(e.target.value))} value={password}></input>
            </div>
            <input type="button" className="btn" onClick={login} value="Login"></input>
            <input type="button" className="btn" onClick={signup} value="signup"></input>
        </form>
    </div>
}
