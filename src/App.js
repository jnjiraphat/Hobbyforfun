import React from 'react'
import Menubar from './Component/Menubar'
import PopupForm from './Component/PopupForm'
import Header from './Component/Header'
import Logo from './img/pic1.png'
import Register from './Component/Register'
import Article from './Component/Article'
import CardHowto from './Component/CardHowto'

import TopicCard from './Component/TopicCard'

const Component = () => (
  <div className="home-wrap clearfix">
    < div className="text-center col-lg-12 bghead ">
      <div className="row">
        <Header />

      </div>
      <PopupForm />
      <div className="row">
        <div className="text-center col-lg-12 bgnav ">
          <Menubar />
        </div>
        <div className="row">
          <div className="text-center col-lg-12">
            <div className="d-flex justify-content-center">
              <TopicCard message="ABOUT" />
            </div> </div>
          <div className="row">
            <div className="text-center col-lg-12 d-flex justify-content-center ">
              <CardHowto />
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
)

export default Component
