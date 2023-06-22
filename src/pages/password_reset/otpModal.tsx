// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import OtpInput from "react-otp-input";

// const Modal = ({handleModal, add}) =>{
//     const [otp, setOtp] = useState('');
//     const navigate = useNavigate();

// const handleOTPForm = (e)=>{
//     e.preventDefault()
//    console.log(otp, add)
//    fetch("https://api.trustauthx.com/forgot/verify_email", {
//     method: "POST",
//     headers: {
//       accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       otp,
//       add: add,
//       types: "string",
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
      
//       if (data.status === 200 && data.is_ok === true) {
//         navigate("/");
//       }
//       if (data.detail) {
//        console.log(data.details) 
//       }
//     })
//     .catch((err) => console.log(err));
// }

   

   
//         return (
//             <>
//             <div className="fixed inset-0 bg-black opacity-60 z-10" onClick={handleModal}></div>
//         <div className="absolute top-[50vh] left-[50vw] translate-x-[-50%] translate-y-[-50%] bg-white flex flex-col justify-center items-center p-4 w-1/2 rounded-lg z-20 "> 
        
//         <p>Please check your email for a reset password OTP. You can reset password <span className="text-blue-400"> by entering OTP </span>in the designated column. If you didn't receive an email, click I didn't receive email</p>
//         <h2 className="text-2xl m-4" >Enter e-mail OTP</h2>
//         <form className="flex flex-col w-full items-center" onSubmit = {handleOTPForm} >
//           <input type="text" className="w-1/2 m-8" value={otp}  onChange={(e)=>setOtp(e.target.value)} />
          
//            <button className="bg-blue-300 py-2 px-3 rounded-md" type="submit">Submit</button>
//         </form>
        
//         <div className="flex w-full">
//             <span className="cursor-pointer  text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600 " >I didn't receive Email &gt;</span>  
//         </div>
//         </div>
//         </>
//         )
    
   
// }


// export default Modal;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import OtpInput from "react-otp-input";

interface ModalProps {
  handleModal: () => void;
  add: string;
}

const Modal: React.FC<ModalProps> = ({ handleModal, add }) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleOTPForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(otp, add);
    fetch("https://api.trustauthx.com/forgot/verify_email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp,
        add: add,
        types: "string",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200 && data.is_ok === true) {
          navigate("/");
        }
        if (data.detail) {
          console.log(data.details);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-60 z-10" onClick={handleModal}></div>
      <div className="absolute top-[50vh] left-[50vw] translate-x-[-50%] translate-y-[-50%] bg-white flex flex-col justify-center items-center p-4 w-1/2 rounded-lg z-20 ">
        <p>
          Please check your email for a reset password OTP. You can reset password{" "}
          <span className="text-blue-400">by entering OTP</span> in the designated column. If you didn't receive an email, click I didn't receive email
        </p>
        <h2 className="text-2xl m-4">Enter e-mail OTP</h2>
        <form className="flex flex-col w-full items-center" onSubmit={handleOTPForm}>
          <input type="text" className="w-1/2 m-8" value={otp} onChange={(e) => setOtp(e.target.value)} />

          <button className="bg-blue-300 py-2 px-3 rounded-md" type="submit">
            Submit
          </button>
        </form>

        <div className="flex w-full">
          <span className="cursor-pointer  text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600 ">I didn't receive Email &gt;</span>
        </div>
      </div>
    </>
  );
};

export default Modal;
