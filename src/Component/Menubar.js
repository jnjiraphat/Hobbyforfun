import React from 'react'
import Register from './Register'
import Scroll from 'react-scroll';

let Link       = Scroll.Link;
let Element    = Scroll.Element;

const Menubar = () => (
    <div className="sticky-top widthnav">
        <nav className="col-lg-12 navbar navbar-expand-lg navbar-light nav-color">
            {/* <Link className="navbar-brand" to="">Navbar</Link> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center font-menu" id="navbarNav">
                
                <ul className="navbar-nav text-center">
                    <li className="nav-item active">
                        <Link activeClass="active" className="boxfont nav-link padding font-menu" to="home" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link activeClass="active" className="boxfont nav-link padding font-menu" to="about" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>About <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link activeClass="active" className="boxfont nav-link padding font-menu" to="schedule" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>Schedule <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link activeClass="active" className="boxfont nav-link padding font-menu" to="activity" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>Activity <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link activeClass="active" className="boxfont nav-link padding font-menu" to="location" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>Location <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link activeClass="active" className="boxfont nav-link padding font-menu" to="faqs" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>FAQs <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link activeClass="active" className="boxfont nav-link padding  font-menu" to="contact" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>Contact <span className="sr-only">(current)</span></Link>
                    </li>
                    
                </ul>
            </div>
        </nav>    
                <Register />
    </div>
    
)

export default Menubar