import React from 'react'
import Menubar from './Component/Menubar'
import PopupForm from './Component/PopupForm'
import Header from './Component/Header'
import Logo from './img/pic1.png'
import TopicCard from './Component/TopicCard'
import About from './Component/About'

const Component = () => (
  <div className="font-fam">
  <div className="containner-fluid">
    <div className="text-center col-lg-12 bghead">
      <div className="row">
        <Header />
        <PopupForm />
      </div>
    </div>
    <Menubar />
    <div className="test-box">
      <div className="row col-lg-12 d-flex justify-content-center">
      <div className="mg-tpabout">
        <TopicCard message="ABOUT"/>
      </div>
    </div>
    <div><p></p></div>
      <div className="mr-pad row col-lg-12 d-flex justify-content-center">
        <About />
      </div>  
    </div>
  </div>
  </div>
)

export default Component
