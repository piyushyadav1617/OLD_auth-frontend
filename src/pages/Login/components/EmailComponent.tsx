import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { createRipple } from "../../../helper/createRipple";

type EmailSubmitType = {
  handleEmailSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export const EmailComponent = ({handleEmailSubmit}: EmailSubmitType) => {
  return (
    <div className="login-wrapper form-wrapper">
      <form
        onSubmit={handleEmailSubmit}
        // className="was-validated"
      >
        <div className="form-group relative">
          <label
            htmlFor="email"
            className="form-label absolute translate-x-6 translate-y-[-12px] bg-white px-1"
          >
            Email
          </label>
          <input
            id="email"
            name="username"
            type="text"
            className="form-control"
            required
            placeholder="name@example.com"
          />
        </div>

        <div className="form-group">
          <div className="d-grid start">
            <button
              type="submit"
              onClick={createRipple}
              className="ripple-button btn btn-spl-primary mt-8 md:mt-11 btn-ca bg-gradient-to-r from-black to-[#6F6F6F] flex items-center justify-center"
            >
              <span>Next</span>
              <span className="forward-arr">
                {" "}
                <FaAngleRight className="ca-forward-arr text-2xl mt-[2px]" />
              </span>
            </button>
          </div>
        </div>

        <div className="ats-content mt-8 md:mt-11">
          <p className="mb-0 text-xl flex items-center flex-wrap">
            I don’t have an AuthX account
            <Link
              className="pl-2 a-t-s a-link text-xl flex items-center"
              to="/sign-up"
            >
              advance to Signup{" "}
              <span className="forward-arr arr-black">
                {" "}
                <FaAngleRight className="pt-1 text-2xl" />
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};