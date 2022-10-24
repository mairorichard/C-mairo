import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Crumb2 from "../components/Crumb2";
import Dispenser from "../assets/dispenserrepair.png";

const DispenserRepair = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Crumb2 name="Dispenser Repair" />

      {/* main */}
      <section className="mx-12 md:mx-24">
        <div className="flex gap-8 items-center">
          {/* left */}
          <div className="flex-[1] hidden md:block">
            <img src={Dispenser} alt="" className="" />
          </div>

          {/* right */}
          <div className="flex-[1]">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-bold text-darkblue">
                Dispenser Servicing / Repair
              </h1>
            </div>

            {/* inputs */}
            <div className="flex flex-col gap-5 mt-5">
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
                      Name
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
                      type="text"
                      id="phone"
                      placeholder="Email"
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-base font-medium"
                    />

                    <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                      Phone
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
                      type="text"
                      id="type"
                      placeholder="type"
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-base font-medium"
                    />

                    <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                      Type
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
                    <textarea
                      type="text"
                      id="type"
                      placeholder="type"
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-base font-medium"
                    />

                    <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                      Comments...
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <Link to={"/"} className="">
              <button className="flex mt-4 gap-4 justify-center rounded-md border border-darkblue bg-darkblue text-white font-medium items-center py-2 px-5 hover:bg-transparent hover:text-darkblue focus:bg-transparent focus:text-darkblue focus:border-2">
                Set New Password
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default DispenserRepair;
