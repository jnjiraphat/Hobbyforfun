import React from 'react'
import Close from '../img/close.png'
/*Knitting*/
const PopupHowto1 = () =>(
    <div>
        <div class="modal fade" id="myHowto1" role="dialog">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-body">
                        <img src={Close} alt="" className="closeHowto" data-dismiss="modal" />
                        <br />
                        <p>TEXT</p>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default PopupHowto1