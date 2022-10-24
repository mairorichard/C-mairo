import React from "react";
import { Icon } from "@iconify/react";
import Logo from "../assets/logo2.png";
import Apple from "../assets/apple.png";
import Android from "../assets/android.png";
import Payment from "../assets/payment-method.png";
import Cta from "../assets/cta.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mx-6 lg:mx-16 mt-20 mb-8">
      <div className=" rounded-2xl flex items-center justify-center lg:justify-between bg-[#E0EBEA] p-8 my-10">
        <img src={Cta} alt="" className="hidden lg:block" />
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-center lg:text-left">
            Refer a friend and get <span className="text-red-600">10%</span>{" "}
            discount on your first purchase{" "}
          </h1>
          <button className="bg-blue border-[2px] border-black rounded-full text-white py-2 px-5 hover:text-black hover:bg-transparent mt-5">
            Get Started
          </button>
        </div>
      </div>
      <div class="grid xl:grid-cols-12 gap-8">
        <div class="col-span-3">
          <div>
            <img src={Logo} alt="footer logo" />
          </div>

          <div className="flex flex-col gap-2 mt-10">
            <div className="flex items-start gap-3">
              <div className="text-blue text-xl">
                <Icon icon="akar-icons:location" />
              </div>
              <p>
                <span className="font-semibold"> Address: </span>
                5Plot 98/100, Oshodi - Apapa expressway, Isolo, Lagos, Nigeria
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-blue text-xl">
                <Icon icon="carbon:headphones" />
              </div>
              <p>
                <span className="font-semibold">Call Us: </span>
                (+234)-01 5155 910
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-blue text-xl">
                <Icon icon="carbon:headphones" />
              </div>
              <p>
                <span className="font-semibold">Call Us: </span>
                (+234)-901 7279 070
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-blue text-xl">
                <Icon icon="logos:whatsapp-icon" />
              </div>
              <p>
                <span className="font-semibold"> WhatsApp: </span>
                (+234)-903 3031 123
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-blue text-xl">
                <Icon icon="iconoir:telegram" />
              </div>
              <p>
                <span className="font-semibold"> Email: </span>
                contactus@cwaystore.com
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-6 grid sm:grid-cols-4 gap-5 flex-row justify-between">
          <div class="...">
            <div className="">
              <h3 className="text-[#253D4E] text-[22px] font-bold">Company</h3>

              <div className="flex flex-col gap-2 mt-6">
                <p>About Us</p>
                <p>Privacy Policy</p>
                <p>Contact Us</p>
                <p>Support Center</p>
                <p>Careers</p>
              </div>
            </div>
          </div>
          <div class="...">
            <div className="">
              <h3 className="text-[#253D4E] text-[22px] font-bold">Account</h3>

              <div className="flex flex-col gap-2 mt-6">
                <p>Sign In</p>
                <p>View Cart</p>
                <p>Track My Order</p>

                <p>View All Order</p>

                <Link to={"/favorite"}>
                  <p>Favorite</p>
                </Link>
              </div>
            </div>
          </div>
          <div class="...">
            <div className="">
              <h3 className="text-[#253D4E] text-[22px] font-bold mt-3 sm:mt-0">
                Information
              </h3>

              <div className="flex flex-col gap-2 mt-6">
                <p>Help & FAQ's</p>
                <p>Store Location</p>
                <p>Feedback for us</p>
              </div>
            </div>
          </div>
          <div class="...">
            <div className="">
              <h3 className="text-[#253D4E] text-[22px] font-bold mt-3 sm:mt-0">
                Payment
              </h3>

              <div className="flex flex-col gap-2 mt-6">
                <p>Wallet</p>

                {/* dummy account button */}
                <Link to={"/account"}>ACCOUNT</Link>
                <Link to={"/dispenserrepair"}>Dispenser repair</Link>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-3">
          <div className="">
            <h3 className="text-[#253D4E] text-[22px] font-bold">
              App & Payment
            </h3>

            <div className="mt-6">
              <p>Install CWAY Home App from App Store or Google Play</p>

              <div className="flex gap-2 mt-4">
                <div className="">
                  <img src={Apple} alt="" />
                </div>
                <div className="">
                  <img src={Android} alt="" />
                </div>
              </div>

              <p className="my-4">Secured Payment Gateways</p>

              <div>
                <img src={Payment} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* line */}
      <div className="w-full h-[2px] rounded bg-[#D8F1E5] my-12"></div>

      <div className="">
        <p className="font-medium">
          © 2022 <span className="text-blue">CWAY Home Store</span> - All rights
          reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
