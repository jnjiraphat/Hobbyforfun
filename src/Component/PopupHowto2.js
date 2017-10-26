import React from 'react'
import Close from '../img/close.png'
/* Paper flower */
const PopupHowto2 = () =>(
    <div>
        <div class="modal fade" id="myHowto2" role="dialog">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-body">
                        <img src={Close} alt="" className="close" data-dismiss="modal" />
                        <br />
                        <p>TEXT</p>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default PopupHowto2