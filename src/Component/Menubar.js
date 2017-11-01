import React from 'react'
import Register from './Register'
import Scroll from 'react-scroll';

let Link       = Scroll.Link;
let Element    = Scroll.Element;

const Manus = [
    {
        to: 'home',
        title: 'Home'
    },
    {
        to: 'about',
        title: 'About'
    },
    {
        to: 'schedule',
        title: 'Schedule'
    },
    {
        to: 'activity',
        title: 'Activity'
    },
    {
        to: 'location',
        title: 'Location'
    },
    {
        to: 'faqs',
        title: 'FAQs'
    },
    {
        to: 'contact',
        title: 'Contact'
    },
]

const Menubar = () => (
    <div className="sticky-top widthnav "data-spy="scroll" data-target=".navbar" data-offset="50">
        <nav className="col-lg-12 navbar navbar-expand-lg navbar-light nav-color">
            {/* <Link className="navbar-brand" to="">Navbar</Link> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <button className="mr-0 navbar-toggler regres" type="button" data-toggle="modal" data-target="#mymodal" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="">Register Now!</span>
            </button>
            <div className="collapse navbar-collapse justify-content-center font-menu" id="navbarNav">
                <ul className="navbar-nav text-center">
                    {
                        Manus.map(manu => (
                            <li className="nav-item active">
                                <Link
                                    activeClass="active"
                                    className="boxfont nav-link padding font-menu"
                                    to={manu.to}
                                    spy
                                    smooth
                                    offset={-30}
                                    duration={500}
                                    onSetActive={this.handleSetActive}
                                >
                                    {manu.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
                    <Register />
    </div>
    
    
)

export default Menubar
