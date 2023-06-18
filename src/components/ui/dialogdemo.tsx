import { Button } from "./Button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./Dialog"
import { Input } from "./Input"
import { Label } from "./Label"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
      <div className="modal_popup text-center">
                  <div className="login_modal_head text-center pt-3 ps-3 pb-2">2 Factor Authentication</div>
                  <div className="popup_line"></div>
                  <div className="login_modal_sub pt-2">Please enter <b>2FA</b> code to login</div>
                  <form className="mt-3">
                    <input className="otp me-2" type="text"  />
                    <input className="otp me-2" type="text"  />
                    <input className="otp me-2" type="text" />
                    <input className="otp me-2" type="text"  />
                    <input className="otp me-2" type="text"  />
                    <input className="otp" type="text"/>
                  </form>
                  <div className="text-center">
                    <button type="button" className="ok_btn_login mt-5 ps-4 pe-4 mb-4" >Ok &#10004;</button>
                  </div>
                </div>
      </DialogContent>
    </Dialog>
  )
}
