import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Home from "./Home";
import NavBar from "./NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function Routing(){
    return <>
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route index element={<Gallery/>}></Route>
            <Route path="Home" element={<Home/>}></Route>
            <Route path="About" element={<About/>}></Route>
            <Route path="Contact" element={<Contact/>}></Route>
            <Route path="Gallery" element={<Gallery/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
}
export default Routing;