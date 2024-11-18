import x from "./logo.svg"
import { Outlet, Link } from "react-router-dom";
import "./NavBar.css"


function NavBar(){
    return<>
    <div>
        <div id="main">
            <div id="logo">
                <img src={x} alt="Logo Image"></img>
            </div>

            <div id="navbar">
                <nav>
                    <Link id="Link" to="/Home">Home</Link>
                    <Link id="Link" to="/About">About</Link>
                    <Link id="Link" to="/Contact">Contact</Link>
                    <Link id="Link" to="/Gallery">Gallery</Link>
                </nav>
            </div>
        </div>
        <Outlet/>
    </div>
    </>
}
export default NavBar;