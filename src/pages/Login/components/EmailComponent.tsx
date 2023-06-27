import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import { createRipple } from "@/helper/createRipple";
import { Input } from "@/components/ui/Input";

type EmailSubmitType = {
  handleEmailSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  register: any;
  errors: any;
  handleSubmit: any;
};

export const EmailComponent = ({
  handleEmailSubmit,
  register,
  errors,
  handleSubmit,
}: EmailSubmitType) => {
  console.log("redered", errors);
  return (
    <div className="login-wrapper form-wrapper">
      <form
        onSubmit={handleSubmit(handleEmailSubmit)}
      // className="was-validated"
      >
        <div className="form-group relative">
          <label
            htmlFor="email"
            className="form-label absolute translate-x-6 translate-y-[-12px] bg-white px-1"
          >
            Email
          </label>
          <Input
            {...register("username", { required: true })}
            id="email"
            type="text"
            name="username"
            className="form-control w-full"
            required
            placeholder="name@example.com"
          />
          {errors.username && (
            <div className="mt-2 color text-red-600">
              <span>{errors.username?.message}</span>
            </div>
          )}
        </div>

        <div className="form-group">
          <div className="d-grid start">
            <button
              type="submit"
              onClick={createRipple}
              className="ripple-button btn btn-spl-primary mt-8 md:mt-11 btn-ca bg-gradient-to-r from-black to-[#6F6F6F] flex items-center justify-center px-8 py-2 rounded-md text-whtie w-full text-center"
            >
              <span className="text-white text-2xl" >Next</span>
              <span className="text-white ">
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
              href="/signup"
            >
              <span className="bg-gradient-to-r bg-clip-text text-transparent from-blue-400 to to-pink-400" >
                advance to Signup{" "}
                <span className="font-bold text-xl align-middle text-black" >
                  &gt;
                </span>
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
