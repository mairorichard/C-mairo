import React from "react";
import { Icon } from "@iconify/react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Crumb3 from "../../components/Crumb3";
import AccountLeft from "../../components/AccountLeft";
import Order1 from "../../assets/order1.png";
import Order2 from "../../assets/order2.png";
import Order3 from "../../assets/order3.png";
import { Link } from "react-router-dom";

const ListData = [
  {
    id: "1",
    amount: "N3,050.00",
    orderRef: "FSFDJSOAHD",
    payment: "Cash on Delivery",
    img1: <img src={Order1} alt="" />,
    img2: <img src={Order2} alt="" />,
    img3: <img src={Order3} alt="" />,
    address:
      "Room #1 - Ground Floor, Al Najoun Bulding, 24 B Street, Dubai - United Arab Emirates",
  },
  {
    id: "1",
    amount: "N3,050.00",
    orderRef: "FSFDJSOAHD",
    payment: "Cash on Delivery",
    img1: <img src={Order1} alt="" />,
    img2: <img src={Order2} alt="" />,

    address:
      "Room #1 - Ground Floor, Al Najoun Bulding, 24 B Street, Dubai - United Arab Emirates",
  },
  {
    id: "1",
    amount: "N3,050.00",
    orderRef: "FSFDJSOAHD",
    payment: "Cash on Delivery",
    img1: <img src={Order1} alt="" />,

    address:
      "Room #1 - Ground Floor, Al Najoun Bulding, 24 B Street, Dubai - United Arab Emirates",
  },
];

const OrdersList = () => {
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

          {/* cards */}
          <div className="mt-6">
            {/* card */}

            {ListData.map((item) => {
              return (
                <div className="grid lg:grid-cols-2 bg-gray-100 p-8 mt-5">
                  <div className="">
                    <div className="">
                      <p className="text-sm font-medium">Amount</p>
                      <h3 className="text-2xl font-bold">{item.amount}</h3>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-10 my-6">
                      <div className="">
                        <p className="font-medium">Order Ref.</p>
                        <p>{item.orderRef}</p>
                      </div>
                      <div className="">
                        <p className="font-medium">Mode of Payment</p>
                        <p>{item.payment}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {item.img1}
                      {item.img2}
                      {item.img3}
                    </div>
                  </div>

                  <div className="flex flex-col lg:items-end gap-4 lg:gap-10">
                    <div className="mt-5 lg:mt-0 lg:text-right flex flex-col gap-3">
                      <h4 className="text-lg font-bold text-darkblue">
                        Delivery Address
                      </h4>

                      <p className="">{item.address}</p>
                    </div>
                    <Link to={`${item.id}`}>
                      <button className="bg-blue px-5 py-2 text-sm text-white rounded">
                        View Order Details
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default OrdersList;
