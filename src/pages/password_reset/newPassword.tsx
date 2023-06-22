import React, { useState } from "react";
import {  useSearchParams,Link } from "react-router-dom";
import Modal from "./otpModal";
import image from './group.svg';
import logo from './logo.svg'

const NewPassword: React.FC = () => {
  ;
  const [searchparams] = useSearchParams();
  const email = searchparams.get("email");
  const [pass, setPass] = useState("");
  const [add, setAdd] = useState("");
  const [show, setShow] = useState(false);

  const handleModal = () => {
    setShow(true);
  };

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(email, pass);
    fetch("https://api.trustauthx.com/forgot/Signup", {
      method: "PUT",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: pass,
        is_pool: true,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.msg) {
          console.log(data.msg);
          setAdd(data.msg);
        }
        handleModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col  md:flex-row h-screen w-screen">
      
      <div className="flex flex-col justify-center items-center h-full w-full md:w-3/5 my-20 md:my-0">
        <div className='absolute top-4 left-4 md:top-8 md:left-8 w-10 md:w-20' ><img src={logo} alt="logo" /></div>
        <div className="w-3/4 md:w-1/2 lg:w-1/2">
          <h2 className="text-left text-2xl md:text-3xl">Reset Password</h2>
        </div>
        
    <form className="flex flex-col w-full items-center justify-center text-left" onSubmit={handleForm}>

     <div className="relative w-3/4 md:w-1/2 lg:w-1/2 my-4 flex items-center">
        <input type="password" id="floating_outlined" className="block w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=""  onChange={(e)=>setPass(e.target.value)} />
          <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-100 top-2 z-3 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale- peer-focus:-translate-y-4 left-1">New Password</label>
     </div>
     <button className="py-2 px-4 w-3/4 md:w-1/2 lg:w-1/2 bg-black text-white rounded-lg my-4" type='submit'>Next &gt;</button>
   </form>
        <p >
          I remember AuthX password{' '}
          <Link className="cursor-pointer text-transparent  bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600"  to="/">
            advance to Login &gt;
          </Link>
        </p>
      </div>

      <div className="flex flex-col justify-center items-center w-full md:w-2/5  md:mt-0 bg-black text-white">
      <p className="text-2xl md:text-3xl my-5 mx-auto text-center md:text-left">
         AuthX: Ensure Security at every level
       </p>
        <img src={image} alt="" className="w-72" />
        <div className='w-full text-right mr-8 mb-6'>
        © 2023 TrustAuthx. All rights reserved.
     </div>
      </div>
     
    {show && <Modal handleModal = {handleModal}  handleForm = {handleForm} add = {add}/>}
    </div>
  );
};

export default NewPassword;
