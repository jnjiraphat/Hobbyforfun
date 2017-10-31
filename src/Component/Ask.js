import React from 'react'
const Ask =()=> (
    <div className="font-ask">
        <br />
        <div id="accordion" role="tablist">
        <div class="card">
        <div class="card-header bg-askl waskl" role="tab" id="headingOne">
            
                <a data-toggle="collapse" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Q : ค่ายนี้มีกิจกรรมอะไรบ้าง?
                </a>
            
        </div>
        <div id="collapseOne" class="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body wask bg-ask">
                A : ค่ายนี้จัดกิจกรรมหลักทั้งหมด 3 อย่างด้วยกัน อันได้แก่ การถักนิตติ้ง, การพับกระดาษ, การสร้างโมเดลจากปืนกาว
                โดยจัดทั้งหมด 3 วัน 2 คืน ซึ่งในส่วนของกิจกรรมพิเศษในค่ายนั้นสามารถสมัครและเข้ามาร่วมถูกเซอร์ไพรส์กันเถอะ    
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header bg-askl waskl" role="tab" id="headingTwo">
            
                <a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Q : ค่ายนี้ไปกลับได้หรือไม่?
                </a>
            
        </div>
        <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
            <div class="card-body wask bg-ask">
                A : ค่ายนี้รับจำนวนทั้งหมด 30 คน โดยเปิดรับทุกคนที่เป็นนักศึกษามหาวิทยาลัยพระจอมเกล้าธนบุรี
                ซึ่งรับเฉพาะ 30 คนแรกที่สมัครเข้ามาก่อนเท่านั้น นอกจากนี้น้องๆที่เข้าค่ายจะได้รับชั่วโมงกิจกรรมอีกด้วยค่ะ 
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header bg-askl waskl" role="tab" id="headingThree">
            
                <a class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Q : ค่ายนี้ไปกลับได้หรือไม่?
                </a>
            
        </div>
        <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="card-body wask bg-ask">
                A : ค่ายนี้เป็นค่ายค้างแรม ไม่สามารถไปกลับได้ค่ะ    
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-header bg-askl waskl" role="tab" id="headingFour">
            
                <a class="collapsed" data-toggle="collapse" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Q : หากไม่สามมารถเข้าร่วมค่ายได้ หรือสมัครไม่ทัน แต่ต้องการร่วมสมทบชิ้นงานได้หรือไม่?
                </a>
            
        </div>
        <div id="collapseFour" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="card-body wask bg-ask">
                A : หากน้องๆสมัครเข้าร่วมค่ายไม่ทัน หรือมีเหตุขัดข้องทำให้มาร่วมค่ายไม่ได้ สามารถร่วมส่งชิ้นงานได้ที่อยู่ที่จัดค่ายค่ะ    
            </div>
        </div>
    </div>
    </div>
</div>
)
export default Ask