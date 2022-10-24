import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Crumb2 = ({ name }) => {
  return (
    <div className="px-5 md:px-16 py-4 my-4 bg-gray-200">
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          className="flex items-center gap-1 text-sm text-gray-500"
        >
          <li>
            <Link
              to={"/"}
              className="block transition-colors hover:text-gray-700"
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

          <li className="text-blue font-medium">{name}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Crumb2;
