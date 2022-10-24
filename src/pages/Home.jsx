import React from "react";
import { Icon } from "@iconify/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Img1 from "../assets/cimg1.png";
import Img2 from "../assets/cimg2.png";
import Img3 from "../assets/cimg3.png";

import CardData from "../data/Data";
import Carousel from "../components/Carousel";
import { CartState } from "../context/Context";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  // console.log(products);
  return (
    <div>
      {/* <Navbar /> */}

      {/* moving images section */}
      <Carousel />

      {/* featured categories section  */}

      <section className="mx-6 lg:mx-16 my-12">
        <div className="flex justify-between items-center mb-5">
          <h1 className="font-semibold text-2xl">Featured Categories </h1>
          <div className="flex flex-row gap-3">
            <button className="bg-[#F2F3F4] hover:bg-[#5D84C1] text-gray-500 hover:text-white  text-lg p-3 rounded-full">
              <Icon icon="akar-icons:arrow-left" />
            </button>
            <button className="bg-[#F2F3F4] hover:bg-[#5D84C1] text-gray-500 hover:text-white text-lg p-3 rounded-full">
              <Icon icon="akar-icons:arrow-right" />
            </button>
          </div>
        </div>
        <div className="grid  md:grid-cols-2 xl:grid-cols-3  gap-5">
          <div className="bg-[#F0E8D5] p-5 sm:p-8 flex items-center justify-between rounded-xl">
            <div className="flex flex-col gap-7">
              <h2 className="font-bold text-lg sm:text-3xl  w-[10%]">
                CWAY WATER
              </h2>
              <div>
                <button className="inline-flex items-center rounded-md border bg-blue px-4 py-2 text-white hover:bg-[#FDC040] focus:outline-none focus:ring active:text-blue focus:bg-[#FDC040]">
                  <span className="text-xs sm:text-sm font-medium">
                    Shop Now
                  </span>

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

            <img src={Img1} alt="" className="h-[100px] sm:h-[160px]" />
          </div>

          <div className="bg-[#F3E8E8] p-5 sm:p-8  flex items-center justify-between rounded-xl">
            <div className="flex flex-col gap-7">
              <h2 className="font-bold text-lg sm:text-3xl w-[10%]">
                CWAY BEVERAGE
              </h2>
              <div>
                <button className="inline-flex items-center rounded-md border bg-blue px-4 py-2 text-white hover:bg-[#FDC040] focus:outline-none focus:ring active:text-blue focus:bg-[#FDC040]">
                  <span className="text-xs sm:text-sm font-medium">
                    Shop Now
                  </span>

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

            <img src={Img2} alt="" className="h-[100px] sm:h-[160px]" />
          </div>

          <div className="bg-[#E7EAF3] p-5 sm:p-8  flex items-center justify-between rounded-xl">
            <div className="flex flex-col gap-7">
              <h2 className="font-bold text-lg sm:text-3xl w-[10%]">
                CWAY DISPENSER
              </h2>
              <div>
                <button className="inline-flex items-center rounded-md border bg-blue px-4 py-2 text-white hover:bg-[#FDC040] focus:outline-none focus:ring active:text-blue focus:bg-[#FDC040]">
                  <span className="text-xs sm:text-sm font-medium">
                    Shop Now
                  </span>

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

            <img src={Img3} alt="" className="h-[100px] sm:h-[160px]" />
          </div>
        </div>
      </section>

      {/* popular products section */}
      <section className="mx-6 lg:mx-16">
        <div className="flex justify-between items-center my-5">
          <h1 className="font-semibold text-xl sm:text-2xl">
            Popular Products
          </h1>
          <div className="flex gap-3 sm:gap-5 text-sm">
            <p className="font-bold cursor-pointer">All</p>
            <p className="cursor-pointer">Water</p>
            <p className="cursor-pointer">Beverage</p>
            <p className="cursor-pointer">Dispenser</p>
          </div>
        </div>

        {/* cards */}
        <Cards grid="lg:grid lg:grid-cols-4" />
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
