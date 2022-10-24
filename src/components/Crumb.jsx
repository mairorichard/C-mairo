import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Crumb1 from "../assets/crumb1.png";

const Crumb = ({ name }) => {
  return (
    <div>
      <section className="mx-6 md:mx-16 my-6 p-5 lg:p-10 rounded-2xl bg-[#F3E8E8] flex justify-between items-center">
        <div className="">
          <h1 className="text-4xl text-darkblue font-bold">{name}</h1>
          <div className="mt-4">
            <nav aria-label="Breadcrumb">
              <ol
                role="list"
                className="flex items-center gap-1 text-sm text-gray-500"
              >
                <li>
                  <Link
                    to={"/"}
                    className="flex items-center transition-colors hover:text-gray-700"
                  >
                    <p className="hidden sm:block">Home</p>

                    <Icon icon="bxs:home-smile" className="sm:hidden text-lg" />
                  </Link>
                </li>

                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>

                <li>
                  <Link
                    to={`/${name}`}
                    className="block transition-colors hover:text-gray-700"
                  >
                    {name}
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="flex">
          <img
            src={Crumb1}
            alt="crumb img"
            className="h-[100px] lg:h-[200px] hidden sm:block"
          />
          <img
            src={Crumb1}
            alt="crumb img"
            className="ml-[-10px] h-[100px] lg:h-[200px] "
          />
        </div>
      </section>
    </div>
  );
};

export default Crumb;
