import React from 'react'
import PopupHowTo1 from './PopupHowto1'
import PopupHowTo2 from './PopupHowto2'
import PopupHowTo3 from './PopupHowto3'
import Logo3 from '../img/pic2.jpg'

const CardHowto = (props) => (
    <div className="text-center col-lg-12">
    <div className="wrapper">
    <div className="product-img">
    <img src={props.picture} height="420" width="327" className="img-center img-fluid" alt="Responsive image" />
    </div>
    <div className="product-info">
      <div className="product-text">
        <h1>{props.h1}</h1>
        <h2>by studio and friends</h2>
        <p>{props.p}</p>
      </div>
      <div class="product-price-btn ">
      <button type="button" data-toggle="modal" data-target={props.target}>วิธีทำ</button>
      <PopupHowTo1 />
      <PopupHowTo2 />
      <PopupHowTo3 />
      </div>
      </div>
      
    </div>
  </div>

)
export default CardHowto