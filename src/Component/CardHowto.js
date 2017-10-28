import React from 'react'
import PopupHowTo1 from './PopupHowto1'
import PopupHowTo2 from './PopupHowto2'
import PopupHowTo3 from './PopupHowto3'

const CardHowto = () => (
    <div className="home-wrap clearfix">
        < div className="text-center col-lg-12">
            <div className="row">
                < div className="text-center col-lg-4">
               
                    <div class="block-cardhowto">
                    <div class="block-cardhowto1"></div>
                    
                        <button type="button" class="btn-howto" data-toggle="modal" data-target="#myHowto1">วิธีทำ</button>
                        <PopupHowTo1 />
                        </div>
                                       
                </div>
            </div>
        </div>
    </div>
)
export default CardHowto