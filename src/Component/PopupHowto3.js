import React from 'react'
import Close from '../img/close.png'
/*Model with glue*/
const PopupHowto3 = () => (
    <div>
        <div className="modal fade" id="myHowto3" role="dialog">
            <div className="modal-dialog modal-md">
                <div className="modal-content">
                    <div className="modal-body">
                        <img src={Close} alt="" className="closeHowto" data-dismiss="modal" />
                        <br />
                        <div className="p2">
                            ตัวอย่างการทำโมเดลจากปืนกาว<br /><br />
                            <div class="video-container">
                            <iframe src="https://www.youtube.com/embed/oNfHb-UmZaU"
                             frameborder="0" gesture="media" allowfullscreen width="400" height="315" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default PopupHowto3