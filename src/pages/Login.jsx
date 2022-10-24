import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Crumb2 from "../components/Crumb2";
import Log from "../assets/login.png";

const Login = () => {
  return (
    <div>
      {/* <Navbar /> */}

      <Crumb2 name={"Login"} />

      {/* main */}
      <section className="mx-14 md:mx-[14rem] mt-14">
        <div className="flex gap-8 items-center">
          {/* left */}
          <div className="flex-[1] hidden lg:block">
            <img src={Log} alt="" />
          </div>

          {/* right */}
          <div className="flex-[1]">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-bold text-darkblue">Login</h1>
              <p className="text-gray-400 text-base">
                Don't have an account?{" "}
                <Link
                  to={"/register"}
                  className="text-green-400 hover:text-green-500"
                >
                  Create here
                </Link>
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
                    Username Or Email *
                  </span>
                </label>
              </div>

              <div className="mt-5">
                <label
                  for="UserEmail"
                  class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-5 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                  <input
                    type="password"
                    id="password"
                    placeholder="Your password"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                    Your Password *
                  </span>
                </label>
              </div>

              <div className="flex justify-between items-center mt-3">
                <div className="text-green-400 flex gap-2 font-medium">
                  <input type="checkbox" className="" />
                  <label>Remember me</label>
                </div>

                <Link
                  to={"/forgotpassword"}
                  className="text-sm sm:text-base font-medium text-gray-400"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className="mt-5">
              <button className="flex gap-4  justify-center rounded-md border border-darkblue bg-darkblue text-white font-medium items-center py-2 px-5 hover:bg-transparent hover:text-darkblue focus:bg-transparent focus:text-darkblue focus:border-2">
                Login
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Login;
