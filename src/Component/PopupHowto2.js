import React from 'react'
import Close from '../img/close.png'
import HowtoFlo from '../img/Howtof.jpg'
import PicFlo1 from '../img/p.jpg'
import PicFlo2 from '../img/p2.jpg'
/* Paper flower */
const PopupHowto2 = () => (
    <div>
        <div className="modal fade" id="myHowto2" role="dialog">
            <div className="modal-dialog modal-md">
                <div className="modal-content">
                    <div className="modal-body">
                        <img src={Close} alt="Responsive image" className="closeHowto" data-dismiss="modal" />
                        <br />
                        <div className="p2">ประดิษฐ์ดอกไม้สวยๆ ประดับบ้าน<br />
                            อุปกรณ์ <br />
                            1.กระดาษย่นสีอ่อน<br />
                            2.สีน้ำ<br />
                            3.พู่กัน<br />
                            4.กรรไกร<br />
                            5.ด้าย<br />
                            6.กิ่งไม้<br />
                            7.กาว<br />
                            8.แจกัน<br /><br />

                            วิธีทำ<br />
                            1.นำกระดาษย่นสีชมพูอ่อน วาดลายดอกไม้ลงไป (ทำให้เป็นกลีบดอก)<br />
                            2.ตัดกลีบดอกไม้ที่ละกลีบ<br />
                            3.นำมาติดรวมกัน รัดด้วยด้าย ทำให้เป็นดอกไม้สวยๆ พันก้านด้วยกระดาษย่นสีเขียว<br />
                            4.นำไปผูกติดกับกิ่งไม้<br />
                            5.ติดใบเลี้ยงเล็กๆ ตรงก้านดอกไม้PicFlo1<br />
                            6.นำไปใส่แจกันสวยๆ ประดับบ้าน<br />
                            <img src={PicFlo1} alt="Responsive image" className="pic1" data-dismiss="modal" width="400px" height="270px"  />
                            <br /><br /><br />
                            <img src={PicFlo2} alt="Responsive image" className="pic1" data-dismiss="modal" width="400px" height="270px" />
                            </div>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default PopupHowto2