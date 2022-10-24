import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Water from "../assets/water.png";
import Beverage from "../assets/beverage.png";
import Dispenser from "../assets/dispenser.png";
import { CartState } from "../context/Context";

const Navbar = () => {
  const [button, setButton] = useState(false);
  const [show, setShow] = useState(false);

  const buttonClick = () => {
    setButton((prev) => !prev);
  };
  const menuDisplay = () => {
    setShow((prev) => !prev);
  };

  const {
    state: { cart },
  } = CartState();
  // console.log(cart);
  return (
    <div className="flex flex-col justify-center items-center gap-8 px-4 lg:px-16">
      {/* top */}
      <div className="w-full">
        <div className="flex w-full items-center justify-between gap-6 mt-4 bg-white ">
          <div className="col-span-2 flex items-center gap-4">
            {/* bars */}
            <div
              className="text-[1.2rem] text-gray-400 block lg:hidden"
              onClick={menuDisplay}
            >
              <Icon icon="fa-solid:bars" />
            </div>
            <Link to={"/"}>
              <img src={Logo} alt="" />{" "}
            </Link>
          </div>

          <div className="lg:flex hidden items-center gap-3 w-[50%]">
            <div className="w-[100%]">
              <div className="border-solid border-2 border-blue flex items-center gap-4 p-2 rounded-md">
                <Icon icon="akar-icons:search" />
                <div className="w-[2px] h-4 bg-gray-300"></div>

                <input
                  type="text"
                  placeholder="Search products, brands and categories"
                  className="outline-none w-full"
                />
              </div>
            </div>

            <button className="inline-block rounded border border-blue bg-blue px-4 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-blue focus:outline-none focus:ring active:text-blue">
              SEARCH
            </button>
          </div>

          <div className="flex items-center justify-between gap-6 sm:gap-3">
            <div className="flex items-center gap-2">
              <div className="text-[24px] relative">
                <Icon icon="akar-icons:heart" />
                <div className="bg-blue px-[10px] py-[6px] text-white text-xs rounded-full text-[12px] flex items-center justify-center absolute -top-5 -right-3">
                  3
                </div>
              </div>

              <p className="text-gray-400 hidden sm:block text-sm">Favorite</p>
            </div>

            <Link to={"/login"} className="flex items-center w-full gap-2">
              <div className="text-[24px]">
                <Icon icon="bx:user" />
              </div>

              <p className="text-gray-400 hidden sm:block text-sm">
                Login / SignUp
              </p>
            </Link>

            <Link to={"/cart"} className="flex items-center gap-2">
              <div className="text-[24px] relative">
                <Icon icon="ant-design:shopping-cart-outlined" />

                <div
                  className={`bg-blue px-[10px] py-[6px] text-white text-xs rounded-full text-[12px] flex items-center justify-center absolute -top-5 -right-3 ${
                    cart.length > 0 ? "block" : "hidden"
                  }`}
                >
                  {cart.length}
                </div>
              </div>

              <p className="text-gray-400 hidden sm:block text-sm">Cart</p>
            </Link>
          </div>
        </div>

        {/* responsive menu */}
        {show && (
          <div className="bg-white text-darkblue  w-[70%] p-7 self-start font-semibold absolute left-0 z-50 shadow-xl">
            <div className="flex flex-col gap-6 justify-between">
              <div className="flex gap-1 items-center">
                <div className="text-blue text-[20px]">
                  <Icon icon="akar-icons:fire" />
                </div>
                <p className="hover:text-blue">Discount Deals</p>
              </div>

              <Link to={"/"}>
                <p className="hover:text-blue">Home</p>
              </Link>

              <Link to={"/store"}>
                <p className="hover:text-blue">Store</p>
              </Link>

              <Link to={"/water"}>
                <p className="hover:text-blue">Water</p>
              </Link>

              <Link to={"/beverage"}>
                <p className="hover:text-blue">Beverage</p>
              </Link>

              <Link to={"/dispenser"}>
                <p className="hover:text-blue">Dispenser</p>
              </Link>

              {/* <div className="flex items-center gap-1">
              <p className="hover:text-blue">Other Categories</p>
              <div className="text-gray-400">
                <Icon icon="dashicons:arrow-down-alt2" />
              </div>
            </div> */}
              <p className="hover:text-blue">CWAY Locator</p>
            </div>
          </div>
        )}
      </div>

      {/* bottom part */}
      <div className="flex flex-col sm:flex-row justify-between w-full gap-7 sm:gap-4 items-start sm:items-center">
        <div className="relative">
          {/* main btn */}
          <button
            onClick={buttonClick}
            className="bg-blue p-3 flex items-center justify-center gap-2 text-white text-[16px] rounded-md cursor-pointer"
          >
            <div className="">
              <Icon icon="mdi:view-dashboard-outline" />
            </div>
            <p className="font-medium">Browse All Categories</p>
            <div className="">
              <Icon icon="dashicons:arrow-down-alt2" />
            </div>
          </button>
          {/* btn dropdown */}

          {button && (
            <div className="border-[1px] border-blue bg-white rounded-md py-6 px-5 absolute shadow-md w-[140%] sm:w-[200%] flex flex-col gap-6 z-20">
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to={"/water"}
                  className="flex items-center gap-3 p-3 rounded-md border-[1px] hover:border-[#BCE3C9]"
                >
                  <img src={Water} alt="" />
                  <p>Water</p>
                </Link>
                <Link
                  to={"/dispenserrepair"}
                  className="flex items-center gap-3 p-3 rounded-md border-[1px] hover:border-[#BCE3C9]"
                >
                  <img src={Dispenser} alt="" />
                  <p>Dispenser </p>
                </Link>
                <Link to={"/beverage"}>
                  <div className="flex items-center gap-3 p-3 rounded-md border-[1px] hover:border-[#BCE3C9]">
                    <img src={Beverage} alt="" />
                    <p>Beverage</p>
                  </div>
                </Link>
              </div>

              <div className="flex gap-3 items-center self-center">
                <div className="text-blue text-[24px]">
                  <Icon icon="akar-icons:circle-plus" />
                </div>
                <p className="font-medium text-gray-500">More categories</p>
              </div>
            </div>
          )}
        </div>

        <div className="font-medium text-[16px] hidden lg:block">
          <div className="flex gap-6 justify-between">
            <div className="flex gap-1 items-center">
              <div className="text-blue text-[20px]">
                <Icon icon="akar-icons:fire" />
              </div>
              <p className="hover:text-blue">Discount Deals</p>
            </div>

            <Link to={"/"}>
              <p className="hover:text-blue">Home</p>
            </Link>

            <Link to={"/store"}>
              <p className="hover:text-blue">Store</p>
            </Link>

            <Link to={"/water"}>
              <p className="hover:text-blue">Water</p>
            </Link>

            <Link to={"/beverage"}>
              <p className="hover:text-blue">Beverage</p>
            </Link>

            <Link to={"/dispenser"}>
              <p className="hover:text-blue">Dispenser</p>
            </Link>

            {/* <div className="flex items-center gap-1">
              <p className="hover:text-blue">Other Categories</p>
              <div className="text-gray-400">
                <Icon icon="dashicons:arrow-down-alt2" />
              </div>
            </div> */}
            <p className="hover:text-blue">CWAY Locator</p>
          </div>
        </div>

        <div className="flex gap-2 cursor-pointer">
          <div className="text-[45px]">
            <Icon icon="carbon:headphones" />
          </div>
          <div className="flex flex-col items-end">
            <h3 className="font-bold text-[22px] text-blue">+234-515 5910</h3>
            <p className="text-sm text-gray-400">24/7 Support Center</p>
          </div>
        </div>
      </div>

      {/* responsive menu */}
    </div>
  );
};

export default Navbar;
