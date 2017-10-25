import React from 'react'
import Menubar from './Component/Menubar'
import PopupForm from './Component/PopupForm'
import Register from './Component/Register'

const Component =()=> (
  <div>
    
    <Register />
    <PopupForm />
    <div className="test-box"></div>
    <Menubar />
    <div className="test-box"></div>
  </div>
)

export default Component
