import React from 'react'
import Success from '../img/success.png'

const PopupSuccess = () =>(
    <div>
            <div class="modal fade" id="myModal2" role="dialog">
                <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-body">
                        <br />
                        <img className="picsuccess" src={Success} alt="" />
                        <p>COMPLETE</p>

                        <button type="button" class="btn-custom2" data-dismiss="modal" herf="#">HOME</button>
                    </div>
                </div>
                </div>
            </div>
    </div>
)
export default PopupSuccess