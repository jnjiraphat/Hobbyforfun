import React from 'react'
import Logo from '../img/pic1.png'
import Register from './Register'
import Logo1 from '../img/HoBBy.png'

const Header = () => (
    <div className="header text-center col-lg-12 bgh">
        <div className="row">
            <div className="tect-center col-lg-12 bgtim">
            <p><img src={Logo1} alt="" className="img-center" width="490px" height="100px"/>       
            <Register/></p>
            </div></div>
        <div className="row">
            <div className="text-center col-lg-4  bgtim1"></div>
            <div className="text-center col-lg-4  bgtim1">
                <img src={Logo} alt="" className="img-center" width="350px" height="400px" />
            </div>
            <div className="text-center col-lg-4  bgtim1"></div>
        </div>
    </div>
)
export default Header