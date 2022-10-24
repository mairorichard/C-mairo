import React from "react";
import { Icon } from "@iconify/react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Crumb3 from "../../components/Crumb3";
import AccountLeft from "../../components/AccountLeft";

const InfoData = [
  {
    id: "1",
    label: "Full Name",
    placeholder: "Solomon Wale",
  },
  {
    id: "2",
    label: "Username",
    placeholder: "Solz",
  },
  {
    id: "3",
    label: "Email",
    placeholder: "email@cwayhome.com",
  },
  {
    id: "4",
    label: "Current Password",
  },
  {
    id: "5",
    label: "New Password",
  },
  {
    id: "",
    label: "Confirm Password",
  },
];

const AccountInfo = () => {
  return (
    <div>
      {/* <Navbar /> */}

      {/* crumbs */}
      <Crumb3 name="Account" name2="Account Information" />

      {/* main */}
      <div className="flex gap-5 md:gap-10 mx-4 md:mx-16 lg:mx-[14rem] mt-14">
        <AccountLeft />
        <div className="flex-[3]">
          <h1 className="text-2xl font-bold text-darkblue">
            Create an Account
          </h1>

          {/* inputs */}
          <div className="mt-8">
            {/* input */}
            {InfoData.map((item) => {
              return (
                <div key={item.id} className="mt-6">
                  <span className="text-base font-medium text-gray-400">
                    {item.label}
                  </span>
                  <label className="relative mt-1 block overflow-hidden rounded-md border border-gray-200 px-3 pt-5 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                    <input
                      type="text"
                      id="fullname"
                      placeholder="fullname"
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-base font-medium"
                    />

                    <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                      {item.placeholder}
                    </span>
                  </label>
                </div>
              );
            })}
          </div>

          <button className="flex mt-5 gap-4 w-full justify-center rounded-md border border-darkblue bg-darkblue text-white font-medium items-center py-2 px-5 hover:bg-transparent hover:text-darkblue">
            Save Changes
          </button>
        </div>
      </div>

      {/* footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default AccountInfo;
