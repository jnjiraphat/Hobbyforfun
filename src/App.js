import React from 'react'
import Menubar from './Component/Menubar'
import PopupForm from './Component/PopupForm'

const Component =()=> (
  <div>
    
    <Menubar />
    
    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Register</button>
    <PopupForm />
    
  </div>
)

export default Component
