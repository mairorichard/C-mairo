import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Crumb from "../components/Crumb";
import Left from "../components/Left";
import Cards from "../components/Cards";
import Sort from "../components/Sort";
import PageNumber from "../components/PageNumber";

const Beverage = () => {
  return (
    <div>
      {/* <Navbar /> */}

      {/* bread crumbs section */}
      <Crumb name="Beverage" />

      {/* main section */}
      <section className="flex gap-2 mx-6 lg:mx-16 my-10">
        {/* left */}
        <Left />

        {/* right */}
        <div className="flex-[3]">
          <Sort />

          {/* cards */}
          <Cards grid="grid-cols-3" />

          <PageNumber />
        </div>
      </section>
      {/* footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Beverage;
