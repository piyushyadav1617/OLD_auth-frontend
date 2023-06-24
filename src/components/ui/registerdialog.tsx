import { Button } from "./Button"
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,

} from "./Dialog"
import { Input } from "./Input"
import { Label } from "./Label"



export function RegisterDialog() {
    const [showDialog, setShowDialog] = useState(false);
  
    const handleShowDialog = () => {
      setShowDialog(true);
    };
  
    const handleCloseDialog = () => {
      setShowDialog(false);
    }
  return (
    <>
     {showDialog && (
    <Dialog>
      <DialogContent className="sm:max-w-[825px]">
      <div className="signup_popup p-5 pt-0">
            <p className="pt-4">Please check your email for a registration link or OTP. You can register any way by clicking on the <span className="text_design">link in E-mail </span>or <span className="text_design">by entering OTP </span>in the designated column. If you didn't receive an email, you can click I didn't receive any email.</p>
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-8">
                <div className="signup_popup mt-5 p-4">
                  <b>Enter OTP</b><br />
                  <input
                    type="text"
                    className="w-50 signup_input mt-3"
                    placeholder="x x x x"
                   
                    name="otp"
                    
                  />
                  <div className="row">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6 mt-4">
                      <button className="ok_btn_login w-100">
                        Proceed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="modal-arr"> ›</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-10 text-start">
                    <button className="round-btn btn-dark mt-4 ps-4 pe-4 down-button" >
                      I didn't receive Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="modal-arr">›</span>
                    </button>
                  </div>
                  <div className="col-lg-2"></div>
                </div>
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>
      </DialogContent>
    </Dialog>
    )}
    </>
  )
}
