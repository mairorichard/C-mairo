import React from "react";
import { Icon } from "@iconify/react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Crumb3 from "../../components/Crumb3";
import AccountLeft from "../../components/AccountLeft";
import Ref from "../../assets/referral.png";

const Referral = () => {
  return (
    <div>
      {/* <Navbar /> */}

      {/* crumb */}
      <Crumb3 name="Account" name2="Referral Code" />

      {/* main */}
      <div className="flex gap-5 md:gap-10 mx-4 md:mx-16 lg:mx-[14rem] mt-14">
        <AccountLeft />

        <div className="flex-[3] flex flex-col sm:items-center gap-3">
          <h1 className="text-2xl font-bold text-darkblue self-start">
            Referral Code
          </h1>

          <div className="">
            <img
              src={Ref}
              alt=""
              className="w-[250px] first-letter sm:w-[400px]"
            />
          </div>

          <div className="font-bold text-xl">Referral Code</div>
          <div className="text-gray-500 text-lg">
            Refer a friend and get{" "}
            <span className="text-red-500 font-medium">10%</span> discount on
            your <span className="font-medium">first purchase</span>
          </div>

          <div className="bg-gray-100 p-3 text-gray-400 text-lg font-semibold flex items-center justify-center gap-3 rounded-xl mt-3">
            <Icon icon="fluent:copy-16-regular" className="text-[1.5rem]" />
            <p>FGX443</p>
          </div>
        </div>
      </div>

      {/* footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Referral;
