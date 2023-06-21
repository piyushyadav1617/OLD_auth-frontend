import React,{useState,useEffect} from 'react';
import { FaAngleRight, FaApple, FaGoogle, FaMicrosoft } from "react-icons/fa";
import { Button } from '../../components/ui/Button';
import {checkUser} from "../../helper/api";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useDispatch , useSelector } from 'react-redux';
import {loginToken , loginUser} from "../../Feature/Auth/authSlice";
import { useNavigate } from 'react-router-dom';
import { Modal } from "react-bootstrap";




const Login = () => {

  
  const { userToken, user } = useSelector((state) => state.auth);

  // email validation
  const asyncEmailValidation = async (email) => {
    if (!document.activeElement || (document.activeElement && document.activeElement.type === "submit")) {
      try {
        const response = await checkUser({ emailid: email });
        const { detail } = response;
        if (!detail) {
          if (response.is_pool) {
            setValue('type', 'pool')
          } else {
            setValue('type', 'participant')
          }
          setfa2(JSON.stringify(response.fa2))
          // setError('email', false)
          return true;
        } else {
          // setError('email', true);
          return false;
        }
      } catch (e) {
        return false
      }
    } else {
      return true
    }
  }


  // yup handler
  const schema = yup.object({
    password: yup.string().required("Password is required").min(3, "Minimum 3 character"),
    username: yup.string().required("Email field required").email("Valid Email address required").test('userNotFound', 'User not exists', asyncEmailValidation),
    type: yup.string().nullable().default(""),
    otp: yup.mixed().default(100000)
  }).required()



  const { register, handleSubmit, formState: { errors, isValid, isSubmitted },
    setValue, setError, getValues } = useForm({
      resolver: yupResolver(schema),
      mode: "onSubmit"
    });


// setting states
  const [fa2, setfa2] = useState("null");
  const [show, setShow] = useState(false);
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);
  const [gAuth, setgAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [proceed,setProceed] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  useEffect(() => {
    setLoading(true)
    if(proceed && userToken === undefined){
        setShowB(true);
        setTimeout(() => {
        setProceed(true);
        setShowB(false);
        }, 3000);
    }
    if (userToken?.access_token) {
      dispatch(loginUser());
    setLoading(false)
    }
    if (user && user?.username) {
      navigate("/dashboard");
    setLoading(false)
    }

    const formData = getValues();
    if (gAuth && formData.username.length && formData.password.length) {
      dispatch(loginToken(formData));
    setLoading(false)
    }
    setLoading(false)
  }, [userToken, user])

  let str = "";
  const nextDigit = (currVal, e) => {
    str += e;
    if (str.length === 6) {
      setValue("otp", str);
    }
    let ele = document.querySelectorAll('input.otp');
    if(str.length !=6){
      ele[currVal + 0].focus();
    }
  }

  const responseSocialAuth = async (response) => {
    // debugger
    const { user, providerId } = response;
    const { reloadUserInfo: { passwordHash } } = user;
    if (user && user.email) {
      setgAuth(true);
      setValue('username', user.email);
      setValue('password', passwordHash)
      const userResponse = await checkUser({ emailid: user.email });
      if (userResponse) {
        if (userResponse.fa2) {
          setShow(true)
        } else {
          if (!userResponse.detail) {

            dispatch(loginToken(getValues()))
          }
        }
      }
    }
  }

  // otp handler
  const otpHandler = (e) => {
    e.preventDefault();
    dispatch(loginToken(getValues()));
    setShow(false);
  };

// on submit handler
  const onSubmitHandler = async(e) => {
    setLoading(true)
    const response = await checkUser({ emailid: getValues().username });
    const faValue = JSON.stringify(response.fa2);
    if (isValid) {
      if (faValue === "true") {
        setShow(true);
        setProceed(true)
      } else {
        dispatch(loginToken(e));
        setProceed(true)
      }
    setLoading(false)
    } else {
      setShowA(true);
      setTimeout(() => {
        setShowA(false);
      }, 3000)
    setLoading(false)
    }

  }

  const navigatePage = (page) => {
    navigate(page)
  }


  // for button ripple effect
  function createRipple(event) {
    const button = event.currentTarget;
  
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
  
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");
  
    const ripple = button.getElementsByClassName("ripple")[0];
  
    if (ripple) {
      ripple.remove();
    }
  
    button.appendChild(circle);
  }
  
  const buttons = document.getElementsByTagName("button");
  for (const button of buttons) {
    button.addEventListener("click", createRipple);
  }

  


  return (
    <div>
      <div className="login-2-page">
        <div className="container">
          <div className="row login-row">
            <div className="col-xs-12 col-sm-12 col-lg-6">
              <div>
                <div className="main-text-login ">
                  <h3 className="r-main-title-2">Business Login</h3>
                </div>
                <div className="login2-wrapper form-wrapper">

                  <form onSubmit={handleSubmit(onSubmitHandler)} autoComplete={false} noValidate className={`${isSubmitted && 'was-validated'}`}>

                    <div className="form-group">
                      <label for="username" className="form-label">
                        Personal Email</label>
                      <input 
                      {...register('username', { required: true })}
                      type="text" name="username" placeholder="Enter your Email"
                      className={`form-control undefined ${errors?.username && 'is-invalid'}`}
                      />
                      {
                            (errors.username) && (
                              <div className="invalid-feedback">
                                <span>{errors.username?.message}</span>
                              </div>
                            )
                          }
                    </div>


                    <div className="form-group">
                      <label for="password" className="form-label">Password</label>
                      <input 
                       {...register('password', { required: true })} name="password" type="password" className={`form-control undefined ${errors?.password && 'is-invalid'}`}
                       placeholder="Enter your Password" 
                      />
                      {
                            (errors?.password) && (
                              <div className="invalid-feedback">
                                {errors?.password?.message}
                              </div>
                            )
                          }
                    </div>

                    <div className="a-t-s a-link mt-4">
                     
                      <span onClick={()=>navigate('/reset-password')} className="a-t-s cursor-pointer">Forgot Password ?</span>
                    </div>

                    <div className="d-grid d-grid-login pt-4">

                  <button type='submit' className="btn btn-signup loginbtn block btn-spl-primary">
                    <span className="signup-txt">Next</span>
                    <span className="forward-arr"> <FaAngleRight className='pt-1' /></span>
                  </button>
                </div>

                  </form>

                </div>
              </div>

              <div className="relative mt-4">
                            <div className="absolute inset-0 flex items-center">
                              <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                              <span className="bg-background px-2 text-muted-foreground">
                                Or continue with
                              </span>
                            </div>
                          </div>
                          <div className='buttons-row pt-4'>
                            <Button variant="outline" className='new_btns button1'>
                              <span className='icon1'> <FaGoogle/> </span> Google
                              </Button>
                            <Button variant="outline" className='new_btns button2'><span className='icon2'> <FaApple /> </span>Apple</Button>
                            <Button variant="outline" className='new_btns button3'><span className='icon3'> <FaMicrosoft/> </span>Microsoft</Button>
                          </div>

              <div className="ats-content pt-4">
                <p className="mb-0 text-center">I don’t have Flitchcoin account       &nbsp;
                  <a className="a-t-s a-link" href="/sign-up">advance to Signup </a>
                  <span className="forward-arr arr-black"> <FaAngleRight className='pt-2' /></span>
                </p></div>
            </div>
            <div className="col-xs-12 col-sm-12 col-lg-6 login-a-center">

            </div>
          </div>
        </div>
      </div>
      <Modal
                show={show}
                onHide={() => setShow(false)}
                backdrop="static"
                keyboard={false}
                className="modal-dialog-login"
              >
                <div className="modal_popup">
                  <div className="login_modal_head text-start pt-3 ps-3 pb-2">2 Factor Authentication</div>
                  <div className="popup_line"></div>
                  <div className="login_modal_sub pt-2">Please enter <b>2FA</b> code to login</div>
                  <form className="mt-3">
                    <input className="otp me-2" type="text" onChange={(e) => nextDigit(1, e.target.value)} />
                    <input className="otp me-2" type="text" onChange={(e) => nextDigit(2, e.target.value)} />
                    <input className="otp me-2" type="text" onChange={(e) => nextDigit(3, e.target.value)} />
                    <input className="otp me-2" type="text" onChange={(e) => nextDigit(4, e.target.value)} />
                    <input className="otp me-2" type="text" onChange={(e) => nextDigit(5, e.target.value)} />
                    <input className="otp" type="text" onChange={(e) => nextDigit(6, e.target.value)} />
                  </form>
                  <div className="text-center">
                    <button type="button" className="ok_btn_login mt-5 ps-4 pe-4 mb-4" onClick={otpHandler}>Ok &#10004;</button>
                  </div>
                </div>
              </Modal>
    </div>
  )
}

export default Login