import React from "react";
import { Icon } from "@iconify/react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Crumb3 from "../../components/Crumb3";
import AccountLeft from "../../components/AccountLeft";
import Backdrop1 from "../../components/Backdrop1";

const AddressData = [
  {
    id: "1",
    name: "Address One - Default Address",
    desc: " Room #1 - Ground Floor, Al Najoun Bulding, 24 B Street, Dubai - United Arab Emirates",
  },
  {
    id: "1",
    name: "Address One - Default Address",
    desc: " Room #1 - Ground Floor, Al Najoun Bulding, 24 B Street, Dubai - United Arab Emirates",
  },
  {
    id: "1",
    name: "Address One - Default Address",
    desc: " Room #1 - Ground Floor, Al Najoun Bulding, 24 B Street, Dubai - United Arab Emirates",
  },
];

const MyAddress = () => {
  return (
    <div>
      {/* <Navbar /> */}

      {/* crumb */}
      <Crumb3 name="Account" name2="My Address" />

      {/* main */}
      <div className="flex gap-5 md:gap-10 mx-4 md:mx-16 lg:mx-[14rem] mt-14">
        <AccountLeft />

        <div className="flex-[3]">
          <div className="">
            <Backdrop1 name="Delivery Address" />
          </div>

          {/* cards */}
          <div className="mt-8 border p-4 md:p-8 rounded-md">
            {AddressData.map((item) => {
              return (
                <div className="" key={item.id}>
                  <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center">
                    <div className="">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="md:w-[50%] text-base mt-2">{item.desc}</p>
                    </div>

                    <div className="md:self-end">
                      <button className="bg-lightRed text-white py-2 px-5 flex gap-2 items-center rounded-md">
                        <Icon
                          icon="akar-icons:circle-x-fill"
                          className="text-[1.2rem]"
                        />
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="h-[1.5px] w-full bg-gray-300 my-5 md:my-10"></div>
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

export default MyAddress;
