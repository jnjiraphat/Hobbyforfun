import React from 'react'
import Menubar from './Component/Menubar'
import PopupForm from './Component/PopupForm'
import Register from './Component/Register'
import TopicCard from './Component/TopicCard'

const Component =()=> (
  <div>
    
    <Register />
    <PopupForm />
    <Menubar />
    {/* <div className="d-flex justify-content-center">
      <TopicCard message="ABOUT" />
    </div> */}
    </div>
)

export default Component
