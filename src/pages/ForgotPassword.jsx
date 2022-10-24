import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Crumb2 from "../components/Crumb2";
import Log from "../assets/login.png";
import Otp from "../assets/otp.png";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    setShow(true);
  };
  return (
    <div>
      {/* <Navbar /> */}

      <Crumb2 name="Forgot Password" />

      {/* main */}

      {!show && (
        <section className="mx-12 lg:mx-[14rem] mt-14">
          <div className="flex gap-8 items-center">
            {/* left */}
            <div className="flex-[1] hidden md:block">
              <img src={Log} alt="" />
            </div>

            {/* right */}
            <div className="flex-[1]">
              <div className="flex flex-col gap-3">
                <div className="">
                  {" "}
                  <img src={Otp} alt="" />
                </div>

                <h1 className="text-4xl font-bold text-darkblue">
                  Forgot your password?
                </h1>
                <p className="text-gray-400 text-base">
                  Not to worry, we got you! Let’s get you a new password. Please
                  enter your email address or your Username.
                </p>
              </div>

              {/* inputs */}
              <div className="mt-8">
                <div className="">
                  <label
                    for="UserEmail"
                    className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-5 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="Email"
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-base font-medium"
                    />

                    <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                      Email or Username
                    </span>
                  </label>
                </div>
              </div>

              {/* checkbox */}
              <div className="mt-3">
                <input
                  disabled
                  id="disabled-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="disabled-checkbox"
                  className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                >
                  I agree to terms & Policy.
                </label>
              </div>

              <div className="mt-5">
                <button
                  className="flex gap-4  justify-center rounded-md border border-darkblue bg-darkblue text-white font-medium items-center py-2 px-5 hover:bg-transparent hover:text-darkblue focus:bg-transparent focus:text-darkblue focus:border-2"
                  onClick={handleSubmit}
                >
                  Reset Password
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* main 2 */}
      {show && (
        <section className="mx-12 lg:mx-[14rem] mt-14">
          <div className="flex gap-8 items-center">
            {/* left */}
            <div className="flex-[1] hidden md:block">
              <img src={Log} alt="" />
            </div>

            {/* right */}
            <div className="flex-[1]">
              <div className="flex flex-col gap-3">
                <div className="">
                  {" "}
                  <img src={Otp} alt="" />
                </div>

                <h1 className="text-4xl font-bold text-darkblue">
                  Enter OTP Verification?
                </h1>
                <p className="text-gray-400 text-base">
                  Please enter the OTP sent to your email or phone number.
                </p>
              </div>

              {/* inputs */}
              <div className="mt-8">
                <div className="">
                  <label
                    for="UserEmail"
                    className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-5 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="Email"
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-base font-medium"
                    />

                    <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                      Enter OTP
                    </span>
                  </label>
                </div>
              </div>
              <Link to={"resetpassword"}>
                <button
                  className="flex gap-4 mt-4 justify-center rounded-md border border-darkblue bg-darkblue text-white font-medium items-center py-2 px-5 hover:bg-transparent hover:text-darkblue focus:bg-transparent focus:text-darkblue focus:border-2"
                  onClick={() => setShow(false)}
                >
                  Reset Password{" "}
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default ForgotPassword;
