import React from 'react'
import Close from '../img/close.png'
import HowtoFlo from '../img/Howtof.jpg'
/* Paper flower */
const PopupHowto2 = () =>(
    <div>
        <div className="modal fade" id="myHowto2" role="dialog">
            <div className="modal-dialog modal-md">
                <div className="modal-content">
                    <div className="modal-body">
                        <img src={Close} alt="" className="closeHowto" data-dismiss="modal" />
                        <br />
                        <img src={HowtoFlo} alt="" className="closeHowto" data-dismiss="modal" />
                        <p>TEXT</p>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default PopupHowto2