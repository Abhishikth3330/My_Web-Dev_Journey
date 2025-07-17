import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
    return (
        <>
          {/* <Navbar/> */}

          <Router>
            <nav>
              <Link to={"Home"}>Home</Link>
              <Link to={"About"}>About</Link>
              <Link to={"Contact"}>Contact</Link>
            </nav>

            <Routes>
              <Route path='Home' element={<Home/>}></Route>
              <Route path='About' element={<About/>}></Route>
              <Route path='Contact' element={<Contact/>}></Route>
            </Routes>


          </Router>
        </>
    );
}

export default App;
