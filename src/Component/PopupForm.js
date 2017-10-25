import React from 'react'

const PopupForm=()=>(


  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>

        <div class="modal-body">
        <div>
        <br/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-lg-12">
                    <div className="head"><h2>Register</h2></div>
                </div>
            </div>
        </div>
        <br/><br/>
    <div className="colorform">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-lg-3">
                    name:
                </div>
                <div className="col-12 col-sm-12 col-lg-9">
                    <input id="form1" className="form-control form-control-sm" type="text" />
                </div>
            </div>
        </div>
        <br/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-lg-3">
                    surname:
            </div>
                <div className="col-12 col-sm-12 col-lg-9">
                    <input id="form2" className="form-control form-control-sm" type="text" />
                </div>
            </div>
        </div>
        <br/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-lg-3">
                    nickname:
                </div>
                <div className="col-12 col-sm-12 col-lg-9">
                    <input id="form3" className="form-control form-control-sm" type="text" />
                </div>
            </div>
        </div>
        <br/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-lg-3">
                    email:
                </div>
                <div className="col-12 col-sm-12 col-lg-9">
                    <input id="form4" className="form-control form-control-sm" type="email" />
                </div>
            </div>
        </div>
        <br/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-lg-3">
                    phone:
                </div>
                <div className="col-12 col-sm-12 col-lg-9">
                    <input id="form5" className="form-control form-control-sm" type="number" />
                </div>
            </div>
        </div>
        <br/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-lg-3">
                    age:
                </div>
                <div className="col-12 col-sm-12 col-lg-9">
                    <input id="form6" className="form-control form-control-sm" type="number" />
                </div>
            </div>
        </div>
        <br/>
        <div className="container">
            <div className="row">
                <div className="col-3 col-sm-3 col-lg-3">
                    gender:
                </div>
                <div className="col-3 col-sm-3 col-lg-3">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                            male
                        </label>
                    </div>
                </div>
                <div className="col-3 col-sm-3 col-lg-3">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                            female
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-3 col-lg-3">
                    birthday:  
                </div> 
                <div className="col-4 col-sm-3 col-lg-3">
                    date  
                </div> 
                <div className="col-4 col-sm-3 col-lg-3">
                    /month
                </div>
                <div className="col-4 col-sm-3 col-lg-3">
                    /year
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-3 col-lg-3">
                </div> 
                <div className="col-4 col-sm-3 col-lg-3">
                    <input id="form7" className="form-control form-control-sm" type="number" />
                </div> 
                <div className="col-4 col-sm-3 col-lg-3">
                    <input id="form8" className="form-control form-control-sm" type="number" />
                </div>
                <div className="col-4 col-sm-3 col-lg-3">
                    <input id="form9" className="form-control form-control-sm" type="number" />
                </div>
            </div>
        </div>
        <br/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-2 col-lg-3">
                    address:
                </div>
                <div className="col-12 col-sm-10 col-lg-9">
                    <form>
                    <textarea class="form-control" id="exampleFormControlTextarea" rows="3"></textarea>
                    </form>
                </div>
            </div>
        </div>
        <br/>
        <div className="button">
                <button type="button" class="btn-custom" href="#">SUBMIT</button>
        </div>
        <br/><br/>
        </div>
        
        </div>
      </div>
      </div>
    </div>
  </div>

)
export default PopupForm