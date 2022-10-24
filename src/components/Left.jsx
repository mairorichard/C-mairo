import React from "react";
import Discount from "../assets/discount.png";
import PopularItems from "../data/popularitems";
import { Icon } from "@iconify/react";

const Left = () => {
  return (
    <div className="flex-[1] w-full hidden lg:block">
      {/* filter items */}
      <div className="border-[1px] border-gray-300 rounded-xl p-5 shadow-md">
        <h3 className="text-xl text-darkblue font-medium">Filter items</h3>

        <div className="h-[1px] bg-gray-400 w-full my-4"></div>

        <div className="flex gap-3 items-center">
          <p className="text-sm text-gray-400">Price Range:</p>
          <h4 className="text-lg text-blue font-medium">N1,600 - N17,300</h4>
        </div>

        {/* slider */}
        <div className="bg-gray-300 w-full h-2 rounded-full my-5 flex items-center justify-center">
          <div className="bg-blue w-[70%] h-2 rounded-full flex items-center justify-between">
            <div className="cursor-pointer h-4 w-4 bg-blue rounded-full"></div>
            <div className="cursor-pointer h-4 w-4 bg-blue rounded-full"></div>
          </div>
        </div>

        {/* brands */}
        <div className="">
          <p className="text-sm text-gray-400">Brand:</p>

          <div className="flex flex-col gap-5 mt-2">
            {/* checkboxs */}
            <div className="flex gap-2">
              <input type="checkbox" />
              <label className="text-md">All</label>
            </div>

            <div className="flex gap-2">
              <input type="checkbox" />
              <label className="text-md">Meca Plus</label>
            </div>

            <div className="flex gap-2">
              <input type="checkbox" />
              <label className="text-md">Nutri Choco</label>
            </div>

            <div className="flex gap-2">
              <input type="checkbox" />
              <label className="text-md">Nutri Milk</label>
            </div>

            <div className="flex gap-2">
              <input type="checkbox" />
              <label className="text-md">Nutri Super Kid</label>
            </div>

            <div className="flex gap-2">
              <input type="checkbox" />
              <label className="text-md">All</label>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button className="bg-blue rounded-md px-4 py-2 flex gap-3 items-center text-white text-md cursor-not-allowed">
            <Icon icon="akar-icons:filter" />
            Filter
          </button>
        </div>
      </div>

      {/* popular items */}
      <div className="border-[1px] border-gray-300 rounded-xl p-5 mt-6 shadow-md">
        <h3 className="text-xl text-darkblue font-medium">Filter items</h3>

        <div className="h-[1px] bg-gray-400 w-full my-4"></div>

        {/* cards */}
        <div className="flex flex-col gap-5">
          {/* card */}

          {PopularItems.map((item) => {
            return (
              <div className="flex justify-between p-2">
                <div className="bg-gray-400 rounded-lg p-4 w-28 h-34 flex justify-center items-center">
                  <img src={item.img} alt="" className="" />
                </div>

                <div className="w-[50%] flex flex-col justify-between">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <div className="flex gap-2 items-center my-1">
                    <div className="flex gap-[2px]">
                      <div className="text-yellow-400">
                        <Icon icon="ant-design:star-filled" />
                      </div>

                      <div className="text-yellow-400">
                        <Icon icon="ant-design:star-filled" />
                      </div>

                      <div className="text-yellow-400">
                        <Icon icon="ant-design:star-filled" />
                      </div>

                      <div className="text-yellow-400">
                        <Icon icon="ant-design:star-filled" />
                      </div>

                      <div className="text-gray-300">
                        <Icon icon="ant-design:star-filled" />
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">(4.0)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-semibold text-blue">
                      {item.price}
                    </h2>
                    <p className="text-sm text-gray-500 line-through">
                      N750.00
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-[#EDF1F4] p-5 flex flex-col gap-5 mt-6 shadow-md">
        <div className="">
          <h4 className="text-lg font-bold text-red-600">Discount Deals</h4>
          <h1 className="text-4xl font-bold text-darkblue">
            TOP HEALTHY DRINK
          </h1>
        </div>

        <div className="flex gap-2">
          <p className="text-md text-gray-400 w-[50%]">
            Get 35% OFF on selected items
          </p>
          <div>
            <button className="inline-flex items-center rounded border border-blue bg-blue px-4 py-2 text-white hover:bg-transparent hover:text-blue focus:outline-none focus:ring active:text-blue">
              <span className="text-sm font-medium"> Shop Now </span>

              <svg
                className="ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <img src={Discount} alt="" />
      </div>
    </div>
  );
};

export default Left;
