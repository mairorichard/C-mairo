import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Crumb3 from "../../components/Crumb3";
import AccountLeft from "../../components/AccountLeft";
import Sing1 from "../../assets/sing1.png";
import Sing2 from "../../assets/sing2.png";
import Sing3 from "../../assets/sing3.png";

const Single = [
  {
    id: "1",
    img: Sing1,
    name: "Refill Water+ Bottle",
    number: "5",
  },
  {
    id: "2",
    img: Sing2,
    name: "Table Water + 1.5ltrs",
    number: "2",
  },
  {
    id: "3",
    img: Sing3,
    name: "Nutri Superkids",
    number: "1",
  },
];

const OrderListSingle = () => {
  return (
    <div>
      {/* <Navbar /> */}

      {/* crumb */}
      <Crumb3 name="Account" name2="Orders List" />

      {/* main */}
      <div className="flex gap-5 md:gap-10 mx-4 md:mx-16 lg:mx-[14rem] mt-14">
        <AccountLeft />

        <div className="flex-[3]">
          <h1 className="text-2xl font-bold text-darkblue">Your Orders</h1>

          {/* stepper */}

          {/* order info */}
          <div className="mt-3">
            <h4 className="text-base font-medium bg-gray-200 p-3 rounded-t-md">
              Order Information
            </h4>

            <div className="bg-gray-100 p-3 font-medium text-base flex flex-col gap-6 text-gray-600 rounded-b-md">
              <div className="flex flex-col sm:flex-row gap-1 sm:items-center justify-between">
                <p className="font-bold sm:font-medium">Order Number</p>
                <p>F337200952001</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-1 sm:items-center justify-between">
                <p className="font-bold sm:font-medium">Order Date</p>
                <p>8 Dec 2021</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-1 sm:items-center justify-between">
                <p className="font-bold sm:font-medium">Confirmation Code</p>
                <p>XF6750</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-1 sm:items-center justify-between">
                <p className="font-bold sm:font-medium">Payment Method</p>
                <p>Cash on Delivery</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-1 justify-between">
                <p className="font-bold sm:font-medium">Delivery Address</p>
                <p className="sm:w-[40%] sm:text-right">
                  Room #1 - Ground Floor, Al Najoun Bulding, 24 B Street, Dubai
                  - United Arab Emirates
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-1 sm:items-center justify-between font-bold">
                <p className="font-bold sm:font-medium">Total Amount</p>
                <p className="text-lg sm:text-base">₦19,375</p>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-2xl my-4 font-medium ">Items Ordered</h4>

              {/* Cards */}
              <div className="flex flex-wrap gap-5">
                {/* card */}

                {Single.map((item) => {
                  return (
                    <div
                      className="relative bg-gray-200 rounded-xl px-5 pt-10 pb-5 flex flex-col justify-between"
                      key={item.id}
                    >
                      <div className="absolute bg-lightblue p-2 text-white top-0 right-0 rounded-tr-xl">
                        x{item.number}
                      </div>

                      <div className="self-center">
                        <img src={item.img} alt="" />
                      </div>

                      <p className="text-base font-medium">{item.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default OrderListSingle;
