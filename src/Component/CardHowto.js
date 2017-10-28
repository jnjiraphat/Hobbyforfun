import React from 'react'
import PopupHowTo1 from './PopupHowto1'
import PopupHowTo2 from './PopupHowto2'
import PopupHowTo3 from './PopupHowto3'
import Logo3 from '../img/pic2.jpg'

const CardHowto = () => (
    <div className="text-center col-lg-12">
    <div className="wrapper">
    <div className="product-img">
    <img src={Logo3} height="420" width="327" className="img-center img-fluid" alt="Responsive image" />
    </div>
    <div className="product-info">
      <div className="product-text">
        <h1>Harvest Vase</h1>
        <h2>by studio and friends</h2>
        <p>Harvest Vases are a reinterpretation<br/> 
        of peeled fruits and vegetables as<br/> 
        functional objects. The surfaces<br/> 
        appear to be sliced and pulled aside,<br/> 
        allowing room for growth. </p>
      </div>
      <div class="product-price-btn">
        <button type="button" data-toggle="myHowto1" data-target="modal">วิธีทำ</button>
      </div>
      </div>
      
    </div>
  </div>

)
export default CardHowto