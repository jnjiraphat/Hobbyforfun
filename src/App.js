import React from 'react'
import Menubar from './Component/Menubar'
import PopupForm from './Component/PopupForm'
import Header from './Component/Header'
import Logo from './img/pic1.png'
import Register from './Component/Register'
import CardHowto from './Component/CardHowto'
import Ask from './Component/Ask'
// import PopupHowTo1 from './Component/PopupHowto1'
// import PopupHowTo2 from './Component/PopupHowto2'
// import PopupHowTo3 from './Component/PopupHowto3'
import TopicCard from './Component/TopicCard'
import Topic from './Component/TopicCard'
import About from './Component/About'
import Schedule from './Component/Schedule'
import Location from './Component/Location'
import Sponsor from './Component/Sponsor'
import Activity from './Component/Activity'
import Contact from './Component/Contact'

const Component = () => (
  <div className="font-fam">
  <div className="home-wrap clearfix">
    <div className="row">
      <div className="container-fluid">
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
              <Topic message="ABOUT" />
            </div>
          </div>
          <div><p></p></div>
          <div className="mr-pad row col-lg-12 d-flex justify-content-center">
            <About />
          </div>
          {/*Schedule*/}
          <div className="row col-lg-12 d-flex justify-content-center">
            <div className="mg-tp">
              <Topic message="SCHEDULE" />
            </div>
          </div>
          <div><p></p></div>
          <div className="mr-pad row col-lg-12 d-flex justify-content-center">
            <Schedule />
          </div>
          {/* Howto  */}
          <div className="row col-lg-12 d-flex justify-content-center">
            <div className="mg-tp">
              <Topic message="ACTIVITY" />
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
              <Topic message="LOCATION" />
            </div>
          </div>
          <div><p></p></div>
          <div className="mr-pad row d-flex justify-content-center">
            <Location />
          </div>
          {/* Ask */}
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="mg-tp">
                <Topic message="Q&A" />
              </div>
          </div>
            </div>
            <div><p></p></div>
            <div className="mr-pad row d-flex justify-content-center">
              <Ask />
          </div>
          {/* Contact */}
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="mg-tp">
                <Topic message="CONTACT"/>
              </div>
            </div>
          </div>
          <div><p></p></div>
          <div className="mr-pad row d-flex justify-content-center">
            <Contact />
          </div>  

          {/* Sponsor */}
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="mg-tp">
                <Topic message="SPONSOR" />
              </div>
            </div>
            <div><p></p></div>
            <div className="col-lg-12 mr-pad row d-flex justify-content-center">
              <Sponsor />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
)

export default Component
