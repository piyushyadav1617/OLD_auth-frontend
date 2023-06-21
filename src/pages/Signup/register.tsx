import React, { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkUser } from "../../helper/api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { reset, signupUser, verifyEmail } from "../../Feature/Auth/authSlice";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import cross from "./images/cross.svg";
import logo from "./images/logo.svg";
import graphics from "./images/signup-graphic.svg";
import OtpInput from "react-otp-input";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loginString, verifyString, userExistStatus } = useSelector(
    (state) => state.auth
  );

  const [termChecked, setTermChecked] = useState(false);
  const [fa2, setfa2] = useState(false);
  const [show, setShow] = useState(false);
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [signType, setSignType] = useState("");

  const [searchParams] = useSearchParams();
  const [otpQuery, setOtpQuery] = useState(
    searchParams.get("otp") ? searchParams.get("otp") : null
  );

  const [memoQuery, setMemoQuery] = useState(
    searchParams.get("memo") ? searchParams.get("memo") : null
  );

  const [refQuery, setRefQuery] = useState(
    searchParams.get("ref") ? searchParams.get("ref") : null
  );

  const [typeQuery, setTypeQuery] = useState(
    searchParams.get("type") ? searchParams.get("type") : null
  );

  // OTP action
  useEffect(() => {
    // console.log(otp);
    if (otp.length === 8) {
      console.log("send OTP");
    }
  }, [otp]);

  // Email Validation
  const asyncEmailValidation = async (email, values, a, d) => {
    console.log(errors);
    if (
      !document.activeElement ||
      (document.activeElement && document.activeElement.type === "submit")
    ) {
      try {
        const response = await checkUser(email);
        const { detail } = response;
        if (!detail) {
          // setError('email', false)
          return false;
        } else {
          // setError('email', true);
          return true;
        }
      } catch (e) {
        return false;
      }
    } else {
      return false;
    }
  };

  const schema = yup
    .object({
      username: yup
        .string()
        .required("Email required")
        .email("Valid Email address required")
        .test("userFound", "User already exists", asyncEmailValidation),
      password: yup.string().required("Password required"),
      referal: yup.string().nullable().default("XXX"),
      type: yup.mixed().nullable().default("participant"),
      otp: yup.mixed().nullable().default(100000),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
    clearErrors,
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const handleChange = () => {
    setTermChecked(!termChecked);
  };

  // otp handler
  const otpHandler = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // debugger
    const formData = getValues();
    setLoading(true);
    let data;
    if (formData.username === "") {
      data = {
        otp: String(otp),
        add: String(loginString.msg),
        link: true,
        types: "email",
      };
    } else {
      data = {
        otp: String(otp),
        add: String(loginString.msg),
        link: false,
        types: "email",
      };
    }
    e.preventDefault();
    dispatch(verifyEmail(data));
    setLoading(false);
    if (verifyString === "Wrong OTP") {
      setShowOtp(true);
      setOtp("");
      setTimeout(() => {
        setShowOtp(false);
      }, 3000);
    }
    if (verifyString) {
      if (verifyString?.status === 200) {
        navigate("/login");
      }
    }
  };

  // no email otp handler
  const noEmailHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const formData = getValues();

    const { username, password, type } = formData;
    setLoading(true);
    if (e) {
      e.preventDefault();
      setLoading(false);
    }
    if (username === "" || password === "") {
      setLoading(false);
      setShowA(true);
    } else {
      setLoading(true);
      setSignType("participant");
      setValue("type", "participant");
      if (username === "" || password === "" || type === "") {
        setShowA(true);
      } else {
        dispatch(signupUser({ formData, type }));
        setLoading(false);
      }
    }
  };

  const [proceed, setProceed] = useState(false);

  // form on submit handler
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {  
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const parsedData = Object.fromEntries(formData.entries());

    console.log(parsedData);
    setShow(true);
    
    // setProceed(!proceed);
    // let isManualValid = false;
    // if (value.fullName && value.username && value.password) {
    //   isManualValid = true;
    // }
    // if (isValid || isManualValid) {
    //   const data = {
    //     formData: value,
    //   };
    //   dispatch(signupUser(data));
    //   setLoading(false);
    // } else {
    //   setLoading(false);
    //   setShowA(true);
    // }
  };

  const fun = (text) => {
    text = text.trim();
    let newString = "";
    for (const char of text) {
      newString += char === "" ? "+" : char;
    }
    return newString;
  };

  useEffect(() => {
    setValue("referal", refQuery);
    if (memoQuery && otpQuery && typeQuery) {
      const strMemo = fun(memoQuery);
      const strOtp = fun(otpQuery);
      const strType = fun(typeQuery);

      const str = memoQuery;
      let posMemo = "";
      for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
          posMemo += "+";
        } else {
          posMemo += str[i];
        }
      }

      const str2 = otpQuery;
      let posOtp = "";
      for (let i = 0; i < str2.length; i++) {
        if (str2[i] === " ") {
          posOtp += "+";
        } else {
          posOtp += str2[i];
        }
      }
      const str3 = typeQuery;
      let posType = "";
      for (let i = 0; i < str3.length; i++) {
        if (str3[i] === " ") {
          posType += "+";
        } else {
          posType += str3[i];
        }
      }
      const data = {
        otp: posOtp,
        add: posMemo,
        link: true,
        types: posType,
      };

      dispatch(verifyEmail(data));
      setLoading(true);
      if (verifyString) {
        if (verifyString?.status === 200) {
          navigate("/");
        }
      }
    } else {
      if (verifyString && verifyString.status === 200) {
        if (verifyString.msg) {
          navigate("/");
        }
      }
    }

    setLoading(false);
    if (userExistStatus === true) {
      setShowB(true);
      setTimeout(() => {
        dispatch(reset());
        navigate("/");
      }, 3000);
    } else if (userExistStatus === false) {
      setLoading(false);
      setShow(true);
    }
    if (verifyString === "Wrong OTP") {
      setShowOtp(true);
      setOtp("");
      setTimeout(() => {
        setShowOtp(false);
      }, 3000);
    }
  }, [userExistStatus, otpQuery, memoQuery, verifyString, refQuery, proceed]);

  useEffect(() => {
    setTimeout(() => {
      setShowA(false);
      setShowB(false);
    }, 3000);
  }, [showA, showB]);

  return (
    <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center">
      <div className="container sm:basis-3/5 flex flex-col min-h-screen">
        <div className="self-start mt-7">
          <img src={logo} alt="AuthX logo" />
        </div>
        <div className="flex my-12 items-center justify-center grow sm:mr-12">
          <div className="md:w-96 lg:w-[32rem]">
            <h1 className="scroll-m-20 text-[2.5rem] text-center pb-4 md:pb-5 font-semibold transition-colors first:mt-0">
              Create a new AuthX account
            </h1>

            <div className="login-wrapper form-wrapper">
              <form
                onSubmit={handleFormSubmit}
                className={`false ${isSubmitted && "was-validated"}`}
              >
                <div className="form-group relative">
                  <label
                    htmlFor="email"
                    className="form-label absolute translate-x-6 translate-y-[-12px] bg-white px-1"
                  >
                    Email
                  </label>
                  <input
                    {...register("username", { required: true })}
                    id="email"
                    name="username"
                    type="text"
                    className={`form-control undefined${
                      errors?.username && "is-invalid"
                    }`}
                    required
                    placeholder="name@example.com"
                  />
                  {errors?.username && (
                    <div className="invalid-feedback">
                      <span>{errors?.username?.message}</span>
                    </div>
                  )}
                </div>

                <div className="form-group mt-8 md:mt-11 relative">
                  <label
                    htmlFor="password"
                    className="form-label absolute translate-x-6 translate-y-[-12px] bg-white px-1"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    {...register("password")}
                    type="password"
                    className={`form-control undefined${
                      errors?.password && "is-invalid"
                    }`}
                    required
                    name="password"
                    placeholder="Enter password"
                  />
                  {errors?.password && (
                    <div className="invalid-feedback">
                      <span>{errors?.password?.message}</span>
                    </div>
                  )}
                </div>

                <div className="form-group mt-8 md:mt-11 relative">
                  <label
                    htmlFor="referral-id"
                    className="form-label absolute translate-x-6 translate-y-[-12px] bg-white px-1"
                  >
                    Referral ID (Optional)
                  </label>
                  <input
                    id="referral-id"
                    {...register("referal", { required: false })}
                    type="text"
                    className={`form-control ${
                      errors?.referal && "is-invalid"
                    }`}
                    name="referral-id"
                    placeholder="Referral-ID"
                  />
                </div>

                <div className="form-group">
                  <div className="d-grid start">
                    <button
                      type="submit"
                      className="btn btn-spl-primary mt-8 md:mt-11 btn-ca bg-gradient-to-r from-black to-[#6F6F6F] flex items-center justify-center"
                    >
                      Next
                      <span className="forward-arr">
                        {" "}
                        <FaAngleRight className="ca-forward-arr text-2xl mt-[2px]" />
                      </span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center mt-8 md:mt-11">
                  <input
                    id="terms"
                    type="checkbox"
                    className="checkbox-customized cursor-pointer"
                  />
                  <label
                    htmlFor="terms"
                    className="ml-5 text-sm font-medium tracking-[.13em] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I have read and agree to Flitchcoin's{" "}
                    <a className="highlighted-text" href="#">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="highlighted-text">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <div className="ats-content mt-8 md:mt-11">
                  <p className="mb-0 text-xl flex items-center flex-wrap">
                    I already have an AuthX account &nbsp;
                    <Link
                      className="a-t-s a-link text-xl flex items-center"
                      to="/"
                    >
                      advance to Login{" "}
                      <span className="forward-arr arr-black">
                        {" "}
                        <FaAngleRight className="pt-1 text-2xl" />
                      </span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black min-h-screen w-full sm:basis-2/5 relative">
        <div className="flex flex-col items-center my-10 md:mt-14 xl:mt-16">
          <h1 className="text-3xl xl:text-4xl mx-4 text-white max-w-md tracking-widest font-light text-center">
            AuthX’s Frictionless Signup/Login Hybrids
          </h1>
          <img
            className="mt-8 md:mt-10 xl:mt-16 w-3/5"
            src={graphics}
            alt="AuthX pre login"
            width={340}
          />
        </div>
        <span className="text-white w-full text-right absolute bottom-0 right-0 mb-4 xl:mb-8 mr-6">
          © 2023 TrustAuthx. All rights reserved.
        </span>
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
        className="modal-dialog-popup"
      >
        <div className="bg-white rounded-3xl p-16">
          {/* <div
            className="text-end pt-2 signup_cross"
            onClick={() => setShow(false)}
          >
            &#9747;
          </div> */}
          <p className="font-light">
            Please check your email for a registration link or OTP. You can
            register any way by clicking on the{" "}
            <span className="text_design">link in E-mail </span>or{" "}
            <span className="text_design">by entering OTP </span>in the
            designated column. If you didn't receive an email, you can click I
            didn't receive any email.
          </p>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="">
              <div className="number_input">
                <div className="text-3xl my-11">Enter e-mail OTP</div>
                <OtpInput
                  containerStyle="flex justify-center gap-1"
                  inputStyle="otp-input-width h-12 p-0 text-center rounded-xl"
                  value={otp}
                  onChange={setOtp}
                  numInputs={8}
                  renderSeparator={<span></span>}
                  renderInput={(props) => <input { ...props} />}
                />
                {/* <input
                  type="text"
                  className="w-50 signup_input mt-3"
                  placeholder="x x x x"
                  onChange={(e) => setOtp(e.target.value)}
                  name="otp"
                  value={otp}
                /> */}
                {/* <div className="row">
                  <div className="col-lg-6"></div>
                  <div className="col-lg-6 mt-4">
                    <button
                      className="ok_btn_login w-100"
                      onClick={(e) => otpHandler(e)}
                    >
                      Proceed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="modal-arr"> ›</span>
                    </button>
                  </div>
                </div> */}
              </div>
              <div className="row">
                <div className="col-lg-10 text-start">
                  <button
                    className="mt-16 p-0 bg-transparent font-['Lexend'] font-normal down-button"
                    onClick={noEmailHandler}
                  >
                    I didn't receive Email
                    <span className="modal-arr pl-2">›</span>
                  </button>
                </div>
                <div className="col-lg-2"></div>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </Modal>

      <Modal
        show={showA}
        onHide={() => setShowA(false)}
        backdrop="static"
        keyboard={false}
        className="modal-dialog-coin"
      >
        <div className="popup_error text-white">
          <div className="popup_error_head">
            <p className="popup_error_head_text text-start ps-3 pt-2 mb-1">
              Unfilled !
            </p>
            <div className="event_line"></div>
          </div>
          <p className="popup_error_body_text pt-4 pb-3">
            Please enter the details to proceed.
          </p>
          <div className="d-flex justify-content-center pb-4">
            <CountdownCircleTimer
              size={40}
              strokeWidth={3}
              isPlaying
              duration={3}
              colors={"red"}
              colorsTime={[3, 0]}
            >
              {({ remainingTime }) => {
                return (
                  <img
                    src={cross}
                    className="cross"
                    onClick={() => setShowA(false)}
                  />
                );
              }}
            </CountdownCircleTimer>
          </div>
        </div>
      </Modal>

      <Modal
        show={showB}
        onHide={() => setShowB(false)}
        backdrop="static"
        keyboard={false}
        className="modal-dialog-coin"
      >
        <div className="popup_error text-white">
          <div className="popup_error_head">
            <p className="popup_error_head_text text-start ps-3 pt-2 mb-1">
              Error !
            </p>
            <div className="event_line"></div>
          </div>
          <p className="popup_error_body_text pt-4 pb-3">
            User already exist. <br />
            Taking you back to Login Page.
          </p>
          <div className="d-flex justify-content-center pb-4">
            <CountdownCircleTimer
              size={40}
              strokeWidth={3}
              isPlaying
              duration={3}
              colors={"red"}
              colorsTime={[3, 0]}
            >
              {({ remainingTime }) => {
                return (
                  <img
                    src={cross}
                    className="cross"
                    onClick={() => setShowB(false)}
                  />
                );
              }}
            </CountdownCircleTimer>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Register;
