import React from 'react'
import Menubar from './Component/Menubar'
import PopupForm from './Component/PopupForm'
import Header from './Component/Header'
import Logo from './img/pic1.png'
import Register from './Component/Register'
import Article from './Component/Article'
import CardHowto from './Component/CardHowto'


// import PopupHowTo1 from './Component/PopupHowto1'
// import PopupHowTo2 from './Component/PopupHowto2'
// import PopupHowTo3 from './Component/PopupHowto3'
import TopicCard from './Component/TopicCard'
import Topic from './Component/TopicCard'
import About from './Component/About'
import Schedule from './Component/Schedule'
import Location from './Component/Location'
<<<<<<< HEAD
import Sponsor from './Component/Sponsor'
=======
import Activity from './Component/Activity'
>>>>>>> 6c6408aa195dcdae4fa164541f9249f6e37073a6

const Component = () => (
  <div className="font-fam home-wrap clearfix">
  <div className="containner-fluid">
    <div className="text-center col-lg-12 bghead">
      <div className="row">
        <Header />
        <PopupForm />
        </div>
    </div>
    <Menubar />
    <div className="test-box">
   
      {/* ABOUT */}
      <div className="row col-lg-12 d-flex justify-content-center">
      <div className="mg-tp">
        <Topic message="ABOUT"/>
      </div>
      </div>
      <div><p></p></div>
      <div className="mr-pad row col-lg-12 d-flex justify-content-center">
        <About />
      </div>  
      {/*Schedule*/}
      <div className="row col-lg-12 d-flex justify-content-center">
      <div className="mg-tp">
        <Topic message="SCHEDULE"/>
      </div>
      </div>
      <div><p></p></div>
      <div className="mr-pad row col-lg-12 d-flex justify-content-center">
        <Schedule />
      </div>
      {/* Howto  */}
      <div className="row col-lg-12 d-flex justify-content-center">
      <div className="mg-tp">
        <Topic message="ACTIVITY"/>
      </div>
      </div>
      <div><p></p></div>
      <div className="mr-pad row col-lg-12 d-flex justify-content-center">
        <CardHowto />
        <CardHowto />
        <CardHowto />
      </div>  
      {/*Location*/}
      <div className="row col-lg-12 d-flex justify-content-center">
      <div className="mg-tp">
        <Topic message="LOCATION"/>
      </div>
      </div>
      <div><p></p></div>
      <div className="mr-pad row d-flex justify-content-center">
        <Location />
<<<<<<< HEAD
      </div>  
    </div>
      {/* Sponsor */}
    <div className="col-lg-12">
      <div className="row col-lg-12 d-flex justify-content-center">
      <div className="mg-tp">
        <Topic message="SPONSOR"/>
      </div>
      </div>
      <div><p></p></div>
      <div className="mr-pad row d-flex justify-content-center">
        <Sponsor />
      </div>  
    </div>
    </div>
    </div>
=======
      </div>
      </div>
  </div>
>>>>>>> 6c6408aa195dcdae4fa164541f9249f6e37073a6
  </div>
  

  // <div className="home-wrap clearfix">
  //     < div className="text-center col-lg-12 bghead ">
  //       <div className="row">
  //         <Header />
  //       </div>
  //         <Register />
  //         <PopupForm />
  //       <div className="row">
  //         <div className="text-center col-lg-12 bgnav ">
  //           <Menubar />
  //         </div>
  //       <div className="row">
  //         <div className="text-center col-lg-12 bgnav ">
  //         </div>

  //ไว้รวมอีกที
          /* <div className="d-flex justify-content-center">
      <TopicCard message="ABOUT" />
    </div> */
        // </div>

        /*<div>
          <!-- Knitting -->
          <button type="button" class="btn-howto" data-toggle="modal" data-target="#myHowto1">วิธีทำ</button>
          <PopupHowTo1 />
          <!-- Paper flower -->
          <button type="button" class="btn-howto" data-toggle="modal" data-target="#myHowto2">วิธีทำ</button>
          <PopupHowTo2 />
          <!-- Model with glue -->
          <button type="button" class="btn-howto" data-toggle="modal" data-target="#myHowto3">วิธีทำ</button>
          <PopupHowTo3 />
        </div>*/
        
        /*<div>
        <!-- MAP (KMUTT) -->
          <Maps /> 
        <!-- Address (KMUTT) -->
          <Address />
        </div>*/
)

export default Component
