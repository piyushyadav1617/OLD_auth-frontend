import image  from './group.svg'
import style from './Password-reset.module.css'
import { useNavigate } from "react-router-dom";
const NewPassword =()=>{
    const navigate = useNavigate();

    return (
        <div className="flex h-screen w-screen">
          <div className="flex flex-col justify-center items-center w-3/5">
            <div className="w-1/2">
              <h2 className="text-left text-3xl">Reset Password</h2>
            </div>
            <form className="flex flex-col items-center w-full">
            <input type="password" className="px-4 py-2 w-3/4 md:w-1/2 lg:w-1/2" />
            <button className="py-2 px-4 w-3/4 md:w-1/2 lg:w-1/2 bg-black text-white rounded-lg my-4">Next &gt;</button>
    
            </form>
            <p>
              I remember AuthX password{' '}
              <span className="cursor-pointer text-blue-500"   onClick={() => navigate('/')}>
                advance to Login &gt;
              </span>
            </p>
          </div>
    
          <div className="flex flex-col justify-center items-center w-2/5 bg-gray-900 text-white">
            <p className="text-3xl mb-5">AuthX: Ensure Security at every level</p>
            <img src={image} alt="" className="w-72" />
          </div>
        </div>
      );


}


export default NewPassword;