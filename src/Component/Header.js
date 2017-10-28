import React from 'react'
import Logo from '../img/pic1.png'
import Register from './Register'
import Logo1 from '../img/draftit.png'

const Header = () => (
    <div className="header text-center col-lg-12 bgh">
        <div className="row">
            <div className="tect-center col-lg-12 bgtim">
            <img src={Logo1} alt="" className="img-center" width="1150px" height="650px"/>       
            <Register />
        
            </div> 
        </div>
    </div>
)
export default Header