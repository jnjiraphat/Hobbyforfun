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
                        <br /><br /><br />
                        <div className="p2">
                            ตัวอย่างการทำโมเดลจากปืนกาว<br /><br />
                            <iframe width="420" height="315" className="pic2"
                                src="https://www.youtube.com/embed/XGSy3_Czz8k?controls=0">
                            </iframe>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default PopupHowto3