import React from 'react'
import PopupHowTo1 from './PopupHowto1'
import PopupHowTo2 from './PopupHowto2'
import PopupHowTo3 from './PopupHowto3'
import Logo3 from '../img/pic2.jpg'
import Flower from '../img/flower1.jpg'
import Model from '../img/gun.jpg'
const CardHowto1 = () => (
    <div className="text-center col-lg-12">
    <div className="wrapper">
    <div className="product-img">
    <img src={Flower} height="420" width="327" className="img-center img-fluid" alt="Responsive image" />
    </div>
    <div className="product-info">
      <div className="product-text">
        <hcard>ดอกไม้ประดิษฐ์</hcard>
        <hr/>
        <p>Harvest Vases are a reinterpretation<br/> 
        of peeled fruits and vegetables as<br/> 
        functional objects. The surfaces<br/> 
        appear to be sliced and pulled aside,<br/> 
        allowing room for growth. </p>
      </div>
      <div class="product-price-btn ">
      <button type="button" data-toggle="modal" data-target="#myHowto1">วิธีทำ</button>
      <PopupHowTo2 />
      </div>
      </div>
      </div>
    </div>
)
export default CardHowto1