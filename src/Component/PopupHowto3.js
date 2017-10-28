import React from 'react'
import Close from '../img/close.png'
/*Model with glue*/ 
const PopupHowto3 = () =>(
    <div>
        <div class="modal fade" id="myHowto3" role="dialog">
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
export default PopupHowto3