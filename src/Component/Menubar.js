import React from 'react'
import Register from './Register'
const Menubar = () => (
    <div className="sticky-top widthnav">
        <nav className="col-lg-12 navbar navbar-expand-lg navbar-light nav-color">
            {/* <a className="navbar-brand" href="#">Navbar</a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center font-menu" id="navbarNav">
                
                <ul className="navbar-nav text-center">
                    <li className="nav-item active">
                        <a className="nav-link padding font-menu" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link padding font-menu" href="#">About <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link padding font-menu" href="#">Schedule <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link padding font-menu" href="#">Location <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link padding font-menu" href="#">How to <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link padding font-menu" href="#">Q&A <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link padding  font-menu" href="#">Contact <span className="sr-only">(current)</span></a>
                    </li>
                    
                </ul>
            </div>
        </nav>    
                <Register />
    </div>
    
)

export default Menubar