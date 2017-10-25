import React from 'react'
import Menubar from './Component/Menubar'
import PopupForm from './Component/PopupForm'
import Header from './Component/Header'
import Logo from './img/pic1.png'

const Component = () => (
  <div>
    <div className="home-wrap clearfix">
      < div className="text-center col-lg-12 bghead ">
        <div className="row">
          <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Register</button>
          <Header />
        </div>
        <PopupForm />
        <div className="row">
          < div className="text-center col-lg-12 bgnav ">
            <Menubar />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Component
