import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Crumb3 from "../components/Crumb3";
import Cart1 from "../assets/cart1.png";
import Cart2 from "../assets/cart2.png";
import Cart3 from "../assets/cart3.png";
import { CartState } from "../context/Context";

// const CartData = [
//   {
//     id: "1",
//     name: "Table Water 75cl (On the Go)",
//     img: Cart1,
//     price: "N2050.00",
//     subtotal: "N2050.00",
//   },
//   {
//     id: "3",
//     name: "Table Water 75cl (On the Go)",
//     img: Cart2,
//     price: "N750.00",
//     subtotal: "N750.00",
//   },
//   {
//     id: "3",
//     name: "Table Water 75cl (On the Go)",
//     img: Cart3,
//     price: "N73,000.00",
//     subtotal: "N146,000.00",
//   },
// ];

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  console.log(total);
  return (
    <div>
      {/* <Navbar /> */}

      <Crumb3 name="Store" name2="Cart" />

      {/* main section */}
      <section className="mx-4 sm:mx-8 lg:mx-12">
        <div className="">
          <h1 className="text-3xl font-bold text-darkblue">Your Cart</h1>

          {/* list */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* left */}
            <div className="flex-[2]">
              <div className="flex justify-between items-center my-3">
                <p className="text-sm font-medium text-gray-400">
                  There are 5 products in your cart
                </p>
                <button className="flex gap-2 items-center text-gray-400 text-sm">
                  <Icon icon="bx:trash" />
                  <p>Clear Cart</p>
                </button>
              </div>

              {/* head */}
              <div className="flex p-3 gap-16 bg-gray-200 rounded-xl">
                <input type="checkbox" />
                <div className="flex justify-between w-full text-base font-medium">
                  <p className="">Products</p>
                  <p className="">Unit Price</p>
                  <p className="hidden sm:block">Quantity</p>
                  <p className="">Subtotal</p>
                  <p className="">Remove</p>
                </div>
              </div>

              {/* body */}

              {cart.map((item) => {
                return (
                  <div className="p-3 mt-3">
                    <div className="grid items-center grid-cols-12 gap-1">
                      {" "}
                      <div className="">
                        <input type="checkbox" />
                      </div>
                      <div className="flex flex-col md:flex-row gap-3 items-start col-span-4 sm:col-span-3">
                        <div className="">
                          <img src={item.img} alt="" />
                        </div>

                        <h4 className="text-base font-medium text-darkblue">
                          {item.name}
                        </h4>
                      </div>
                      <h3 className="font-bold text-xl text-gray-400 justify-self-start col-span-2">
                        {item.price}
                      </h3>
                      <div className="col-span-3 hidden sm:block">
                        <div className="border-2 border-blue rounded-xl p-2 flex items-center justify-center w-[50%]">
                          <input
                            type="number"
                            placeholder="1"
                            className="placeholder:text-blue text-blue font-medium outline-none w-[50%]"
                            min="1"
                            max="100"
                          />
                        </div>
                      </div>
                      <h3 className="font-bold text-xl text-blue justify-self-end col-span-3 sm:col-span-2">
                        {}
                      </h3>
                      <Icon
                        icon="akar-icons:circle-x"
                        className="text-[1.5rem] text-gray-400 justify-self-end cursor-pointer"
                        onClick={() => {
                          dispatch({ type: "REMOVE_FROM_CART", payload: item });
                        }}
                      />
                    </div>
                  </div>
                );
              })}

              <div className="hidden md:flex justify-between gap-5 items-center mt-5">
                <div className="">
                  <button className="flex gap-2 sm:gap-4 rounded-md border border-lightRed bg-lightRed text-white font-medium items-center py-2 px-5 hover:bg-transparent hover:text-lightRed">
                    <Icon icon="bytesize:arrow-left" />
                    Continue Shopping
                  </button>
                </div>

                <div className="">
                  <button className="flex gap-4 rounded-md border border-blue bg-blue text-white font-medium items-center py-2 px-5 hover:bg-transparent hover:text-blue">
                    <Icon icon="charm:refresh" /> Update Cart
                  </button>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="flex-[1] border rounded-xl p-6">
              <div className="flex justify-between items-center">
                <p className="text-base font-medium text-gray-400">Subtotal</p>
                <h3 className="font-medium text-2xl text-blue">
                  {cart.length} {cart.length > 1 ? "Items" : "item"}
                </h3>
              </div>

              <div className="h-[2px] my-4 w-full bg-gray-200"></div>

              <div className="flex justify-between items-center">
                <p className="text-base font-medium text-gray-400">Total</p>
                <h3 className="font-medium text-2xl text-blue">{total}</h3>
              </div>
              <Link to={"/checkout"}>
                <button className="mt-10 flex gap-4 w-full justify-center rounded-md border border-blue bg-blue text-white font-medium items-center py-2 px-5 hover:bg-transparent hover:text-blue">
                  Proceed to Checkout
                  <Icon icon="ic:round-logout" className="text-[20px]" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* apply section  */}
      <section className="mx-6 md:mx-16 my-16">
        <div className="">
          <h3 className="text-lg text-darkblue font-semibold">Apply Coupon</h3>
          <p className="text-sm font-normal text-gray-400 mt-2">
            Using A Promo Code?
          </p>

          <div className="flex mt-5">
            <label
              for="UserEmail"
              class="relative block overflow-hidden rounded-l-xl border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 w-full md:w-[50%]"
            >
              <input
                type="email"
                id="UserEmail"
                placeholder="Email"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />

              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Coupon Code
              </span>
            </label>

            <button className="bg-blue text-white px-6 hover:bg-transparent hover:text-blue border border-blue rounded-r-xl flex items-center">
              Apply
            </button>
          </div>
        </div>
      </section>

      {/* footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Cart;
