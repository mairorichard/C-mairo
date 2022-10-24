import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Crumb2 from "../components/Crumb2";
import Log from "../assets/login.png";
import Otp from "../assets/otp.png";

const Register = () => {
  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    setShow(true);
  };
  return (
    <div>
      {/* <Navbar /> */}

      <Crumb2 name="Register" />

      {/* main */}
      {!show && (
        <section className="mx-12 lg:mx-[14rem] mt-14">
          <div className="flex flex-col gap-3 my-10">
            <h1 className="text-4xl font-bold text-darkblue">
              Create an Account
            </h1>
            <p className="text-gray-400 text-base">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy
            </p>
          </div>

          {/* inputs */}
          <div className="grid sm:grid-cols-2 gap-8">
            {/* input */}
            <div className="">
              <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-5 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <input
                  type="text"
                  id="fullname"
                  placeholder="fullname"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-base font-medium"
                />

                <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Fullname
                </span>
              </label>
            </div>

            {/* input */}
            <div className="">
              <label
                for="UserEmail"
                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-5 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <input
                  type="text"
                  id="Username"
                  placeholder="Username"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-base font-medium"
                />

                <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Username
                </span>
              </label>
            </div>

            {/* input */}
            <div className="">
              <label
                for="UserEmail"
                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-5 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <input
                  type="text"
                  id="Email"
                  placeholder="Email"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-base font-medium"
                />

                <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Email
                </span>
              </label>
            </div>

            {/* input */}
            <div className="">
              <label
                for="UserEmail"
                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-5 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <input
                  type="text"
                  id="Phone"
                  placeholder="Phone"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-base font-medium"
                />

                <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Phone
                </span>
              </label>
            </div>

            {/* input */}
            <div className="">
              <label
                for="UserEmail"
                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-5 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <input
                  type="password"
                  id="Password"
                  placeholder="Password"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-base font-medium"
                />

                <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Password
                </span>
              </label>
            </div>

            {/* input */}
            <div className="">
              <label
                for="UserEmail"
                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-5 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <input
                  type="text"
                  id="Area"
                  placeholder="Area"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-base font-medium"
                />

                <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Area
                </span>
              </label>
            </div>

            {/* input */}
            <div className="">
              <label
                for="UserEmail"
                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-5 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <input
                  type="password"
                  id="ConfirmPassword"
                  placeholder="ConfirmPassword"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-base font-medium"
                />

                <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  ConfirmPassword
                </span>
              </label>
            </div>

            {/* input */}
            <div className="">
              <label
                for="UserEmail"
                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-5 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <input
                  type="text"
                  id="Referral code (Optional)"
                  placeholder="Referral code (Optional)"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-base font-medium"
                />

                <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Referral code(Optional)
                </span>
              </label>
            </div>
          </div>

          <div className="">
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

          <button
            className="flex mt-5 gap-4  justify-center rounded-md border border-darkblue bg-darkblue text-white font-medium items-center py-2 px-5 hover:bg-transparent hover:text-darkblue"
            onClick={handleSubmit}
          >
            Register
          </button>
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
              <div className="mt-5">
                <Link to={"/"}>
                  <button
                    className="flex gap-4  justify-center rounded-md border border-darkblue bg-darkblue text-white font-medium items-center py-2 px-5 hover:bg-transparent hover:text-darkblue focus:bg-transparent focus:text-darkblue focus:border-2"
                    onClick={() => setShow(false)}
                  >
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Register;
