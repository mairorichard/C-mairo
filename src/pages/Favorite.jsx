import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Crumb3 from "../components/Crumb3";
import WishListTable from "../components/WishListTable";
import C from "../assets/otp.png";

const Favorite = () => {
  return (
    <div>
      {/* <Navbar /> */}

      <Crumb3 name="Store" name2="Favorite" />

      {/* main */}
      <div className="mx-6 md:mx-16 my-16">
        <h3 className="text-4xl text-darkblue font-semibold">Your Wishlist</h3>
        <p className="text-sm font-normal text-gray-400 mt-2">
          There are 5 products in this list
        </p>

        <div className="">
          <WishListTable />
        </div>
      </div>

      {/* footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Favorite;
