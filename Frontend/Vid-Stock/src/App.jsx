import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HomePage } from './pages/homepage';
import { LoginPage } from './pages/loginpage';
import { VideoPage } from './pages/videopage';
import { UploadPage } from "./pages/uploadpage";
import Header from "./components/Header";


function App() {
  return <>

    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/login" Component={LoginPage}></Route>
        <Route path="/video" Component={VideoPage}></Route>
        <Route path="/upload" Component={UploadPage}></Route>
      </Routes>
    </BrowserRouter>

  </>
}

export default App
