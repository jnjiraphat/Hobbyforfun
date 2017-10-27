import React from 'react'
import Menubar from './Component/Menubar'
import PopupForm from './Component/PopupForm'
import Header from './Component/Header'
import Logo from './img/pic1.png'
import Register from './Component/Register'
import Article from './Component/Article'
import PopupHowTo1 from './Component/PopupHowto1'
import PopupHowTo2 from './Component/PopupHowto2'
import PopupHowTo3 from './Component/PopupHowto3'
import TopicCard from './Component/TopicCard'
import Maps from './Component/Maps'
import Address from './Component/Address'

const Component =()=> (
  <div className="home-wrap clearfix">
      < div className="text-center col-lg-12 bghead ">
        <div className="row">
          <Header />
        </div>
          <Register />
          <PopupForm />
        <div className="row">
          <div className="text-center col-lg-12 bgnav ">
            <Menubar />
          </div>
        <div className="row">
          <div className="text-center col-lg-12 bgnav ">
            <Article/>
          </div>
          {/* <div className="d-flex justify-content-center">
      <TopicCard message="ABOUT" />
    </div> */}
        </div>

        {/*<div>
          <!-- Knitting -->
          <button type="button" class="btn-howto" data-toggle="modal" data-target="#myHowto1">วิธีทำ</button>
          <PopupHowTo1 />
          <!-- Paper flower -->
          <button type="button" class="btn-howto" data-toggle="modal" data-target="#myHowto2">วิธีทำ</button>
          <PopupHowTo2 />
          <!-- Model with glue -->
          <button type="button" class="btn-howto" data-toggle="modal" data-target="#myHowto3">วิธีทำ</button>
          <PopupHowTo3 />
        </div>*/}
        
        {/*<div>
        <!-- MAP (KMUTT) -->
          <Maps /> 
        <!-- Address (KMUTT) -->
          <Address />
        </div>*/}
        
      </div>
    </div>

  </div>
)

export default Component
