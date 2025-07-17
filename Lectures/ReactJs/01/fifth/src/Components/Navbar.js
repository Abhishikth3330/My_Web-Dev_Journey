import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="Home.js">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="About.js">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>   
    )
}

export default Navbar


