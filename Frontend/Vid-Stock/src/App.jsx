import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HomePage } from './pages/homepage';
import { LoginPage } from './pages/loginpage';
import { VideoPage } from './pages/videopage';

function App() {
  return <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/login" Component={LoginPage}></Route>
        <Route path="/video" Component={VideoPage}></Route>
      </Routes>
    </BrowserRouter>
   
  </>
}

export default App
