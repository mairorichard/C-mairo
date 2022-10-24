import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Crumb2 from "../components/Crumb2";
import Log from "../assets/login.png";
import Otp from "../assets/otp.png";
import Reset from "../assets/reset.png";

const ResetPassword = () => {
  return (
    <div>
      {/* <Navbar /> */}

      <Crumb2 name="Reset Password" />

      {/* main */}
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
                <img src={Reset} alt="" />
              </div>

              <h1 className="text-4xl font-bold text-darkblue">
                Set new password
              </h1>
              <p className="text-gray-400 text-base">
                Please create a new password that you don’t use on any other
                site.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-5 items-center mt-3">
              {/* inputs */}
              <div className="flex flex-col gap-5">
                {/* input */}
                <div className="">
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
                        New Password
                      </span>
                    </label>
                  </div>
                </div>
                {/* input */}
                <div className="">
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
                        Confirm New Password
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* password musts */}
              <div className="text-gray-500">
                <h4 className="font-medium">Password must:</h4>
                <p className="ml-2 mt-2">
                  Between 9 and 64 characters include at least two of the
                  following:
                </p>
                <ol className="list-disc text-sm ml-8 mt-2">
                  <li>A lowercase character</li>
                  <li>A number</li>
                  <li>A special character</li>
                </ol>
              </div>
            </div>

            <Link to={"/"} className="">
              <button className="flex mt-4 gap-4  justify-center rounded-md border border-darkblue bg-darkblue text-white font-medium items-center py-2 px-5 hover:bg-transparent hover:text-darkblue focus:bg-transparent focus:text-darkblue focus:border-2">
                Set New Password
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default ResetPassword;
