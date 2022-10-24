import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Crumb3 from "../components/Crumb3";
import Backdrop1 from "../components/Backdrop1";
import Cart1 from "../assets/cart1.png";
import Cart2 from "../assets/cart2.png";
import Cart3 from "../assets/cart3.png";

const CartData = [
  {
    id: "1",
    name: "Table Water 75cl (On the Go)",
    img: Cart1,
    price: "N2050.00",
    subtotal: "N2050.00",
  },
  {
    id: "3",
    name: "Table Water 75cl (On the Go)",
    img: Cart2,
    price: "N750.00",
    subtotal: "N750.00",
  },
  {
    id: "3",
    name: "Table Water 75cl (On the Go)",
    img: Cart3,
    price: "N73,000.00",
    subtotal: "N146,000.00",
  },
];

const Checkout = () => {
  const [show, setShow] = useState(false);

  const wallerHandler = () => {
    setShow(true);
  };

  return (
    <div>
      {/* <Navbar /> */}

      <Crumb3 name="Store" name2="Checkout" />

      {/* main */}
      <section className="mx-6 md:mx-16 my-16">
        <div className="">
          <h3 className="text-4xl text-darkblue font-semibold">Checkout</h3>
          <p className="text-sm font-normal text-gray-400 mt-2">
            There are <span className="text-green-600">3</span> products in your
            cart
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          {/* left */}
          <div className="mt-5 md:mt-10 flex-[2]">
            {/* buttons */}
            <div className="flex items-center gap-6 mt-16">
              <div className="">
                <button className="flex gap-4 w-full justify-center rounded-md border border-lightblue bg-lightblue text-white font-medium items-center py-2 px-5 hover:bg-transparent hover:text-lightblue">
                  <Icon icon="bi:check-circle-fill" />
                  Door Delivery
                </button>
              </div>
            </div>

            {/* address book */}
            <div className="my-5">
              <Backdrop1 name="Address Book" />

              {/* address */}
              <div className="mt-10 flex flex-col md:flex-row gap-3">
                {/* address 1 */}
                <div className="bg-[#F1FAFF] border border-lightblue p-5 rounded-lg">
                  <div className="flex justify-between items-center">
                    <h5 className="text-lg font-medium text-darkblue">
                      Address one
                    </h5>
                    <Icon
                      icon="bi:check-circle-fill"
                      className="text-lightblue text-[1.4rem]"
                    />
                  </div>

                  <p className="text-base text-gray-500  mt-3">
                    Room #1 - Ground Floor, Al Najoun Bulding, 24 B Street,
                    Dubai - United Arab Emirates
                  </p>
                </div>

                {/* address 2 */}
                <div className="bg-gray-200 border p-5 rounded-lg">
                  <div className="flex justify-between items-center">
                    <h5 className="text-lg font-medium text-darkblue">
                      Address Two
                    </h5>
                  </div>

                  <p className="text-base text-gray-500 mt-3">
                    Room #1 - Ground Floor, Al Najoun Bulding, 24 B Street,
                    Dubai - United Arab Emirates
                  </p>
                </div>
              </div>

              {/* button */}

              <div className="mt-5">
                <button className="flex gap-4  justify-center rounded-md border border-darkblue bg-darkblue text-white font-medium items-center py-2 px-5 hover:bg-transparent hover:text-darkblue">
                  Confirm Address
                </button>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="flex-[1] border rounded-xl p-6">
            {/* top */}
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-xl text-darkblue">Your Orders</h3>
              <p className="text-base font-medium text-gray-400">Subtotal</p>
            </div>
            <div className="h-[1px] bg-gray-400 w-full my-5"></div>
            {/* list of items */}
            <div className="">
              {/* item */}
              {CartData.map((item) => {
                return (
                  <div className="grid grid-cols-8 items-center gap-3">
                    <div className="p-2 border rounded-lg flex items-center justify-center col-span-2 my-3">
                      <img src={item.img} alt="" />
                    </div>

                    <div className="col-span-3">
                      <h4 className="text-base font-medium text-darkblue">
                        {item.name}
                      </h4>
                    </div>

                    <div className="text-xl text-gray-300">x 1</div>

                    <div className="text-xl text-blue font-medium col-span-2 truncate">
                      {item.price}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* total */}
            <div className="">
              <div className="flex justify-between items-center">
                <p className="text-base  text-gray-400">Delivery Fee</p>
                <p className="text-2xl text-blue font-medium">N0.00</p>
              </div>

              <div className="h-[1px] bg-gray-400 w-full my-5"></div>

              <div className="flex justify-between items-center">
                <p className="text-base  text-gray-400">Total</p>
                <p className="text-2xl text-blue font-medium">N200,012.31</p>
              </div>
            </div>

            {/* input */}
            <div className="flex my-10">
              <div className="w-full lg:w-[70%]">
                <label
                  for="UserEmail"
                  className="relative block overflow-hidden rounded-l-xl border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Email"
                    className="peer h-8  border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs flex items-center gap-3">
                    <Icon icon="akar-icons:tag" /> Coupon Code
                  </span>
                </label>
              </div>

              <button className="bg-darkblue text-white text-sm px-3 hover:bg-transparent hover:text-darkblue border border-darkblue rounded-r-xl flex items-center w-[25%] lg:w-auto ">
                Apply Coupon
              </button>
            </div>

            {/* radio inputs */}
            <div className="mt-8">
              <h3 className="font-medium text-xl text-darkblue my-3">
                Payment
              </h3>

              <div className="flex flex-col gap-4">
                <div className="">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onClick={wallerHandler}
                  />{" "}
                  Wallet
                </div>

                {/* wallet */}

                {show && (
                  <div className="bg-gray-300 rounded p-4 flex justify-between items-center">
                    <div className="">
                      <span className="text-sm font-medium text-blue">
                        Wallet Balance
                      </span>
                      <h4 className="text-darkblue font-semibold text-xl">
                        N200,012.31
                      </h4>
                    </div>

                    <div className="">
                      <button className="bg-blue p-3 text-white hover:bg-transparent rounded hover:text-blue focus:border-2 focus:border-blue focus:bg-transparent focus:text-blue">
                        Top Up
                      </button>
                    </div>
                  </div>
                )}

                <div className="">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onClick={() => setShow(false)}
                  />{" "}
                  Cash on delivery
                </div>

                <div className="">
                  <input type="radio" name="gender" value="other" /> Card
                  Payment
                </div>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-4 items-center mt-10">
              <button className="flex gap-2 w-full justify-center rounded-md border border-blue bg-blue text-white font-medium items-center py-2 px-5 hover:bg-transparent hover:text-blue">
                Place An Order
                <Icon icon="ic:round-logout" className="text-[20px]" />
              </button>
              <button className="flex gap-2 w-full justify-center rounded-md border border-blue hover:bg-blue hover:text-white font-medium items-center py-2 px-5 hover:bg-transparent text-blue">
                Schedule Order
                <Icon
                  icon="healthicons:i-schedule-school-date-time"
                  className="text-[20px]"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pop up */}

      {/* footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Checkout;
