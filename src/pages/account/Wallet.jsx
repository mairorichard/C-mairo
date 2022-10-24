import React from "react";
import { Icon } from "@iconify/react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Crumb3 from "../../components/Crumb3";
import AccountLeft from "../../components/AccountLeft";

const WalletData = [
  {
    id: "1",
    name: "Wallet Top Up",
    date: "20-05-2022 09:10:34",
    amount: "N3,050.00",
  },
  {
    id: "2",
    name: "Wallet Top Up",
    date: "20-05-2022 09:10:34",
    amount: "N3,050.00",
  },
  {
    id: "3",
    name: "Wallet Top Up",
    date: "20-05-2022 09:10:34",
    amount: "N3,050.00",
  },
  {
    id: "4",
    name: "Wallet Top Up",
    date: "20-05-2022 09:10:34",
    amount: "N3,050.00",
  },
];

const Wallet = () => {
  return (
    <div>
      {/* <Navbar /> */}

      {/* crumb */}
      <Crumb3 name="Account" name2="Wallet" />

      {/* main */}
      <div className="flex gap-5 md:gap-10 mx-4 md:mx-16 lg:mx-[14rem] mt-14">
        <AccountLeft />

        <div className="flex-[3]">
          <h1 className="text-2xl font-bold text-darkblue">Wallet</h1>

          {/* balance */}
          <div className="bg-gray-100 flex flex-col gap-5 items-center py-5 rounded-xl mt-4">
            <div className="flex flex-col items-center">
              <p className="font-medium text-sm">Wallet</p>
              <h1 className="font-bold text-4xl">N3,050.00</h1>
            </div>

            <div className="">
              <button className="flex items-center gap-1 font-medium bg-lightblue text-white py-2 px-5 rounded-lg">
                <Icon icon="carbon:add-filled" className="text-[1.5rem]" />
                Top Up Wallet
              </button>
            </div>
          </div>

          {/* list */}
          <div className="mt-5">
            {WalletData.map((item) => {
              return (
                <div
                  className="bg-gray-100 flex justify-between sm:items-center p-4 mt-2 rounded"
                  key={item.id}
                >
                  <div className="flex gap-2">
                    <div className="hidden sm:block">
                      <div className="sm:p-2 p-1 bg-green-200 text-green-500 rounded-lg">
                        <Icon
                          icon="akar-icons:circle-check-fill"
                          className="sm:text-[1.2rem]"
                        />
                      </div>
                    </div>

                    <div className="sm:ml-5">
                      <h4 className="font-semibold text-base">{item.name}</h4>
                      <p className="sm:text-sm text-xs text-gray-500">
                        {item.date}
                      </p>
                    </div>
                  </div>
                  <div className="font-bold text-base sm:text-lg">
                    {item.amount}
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

export default Wallet;
