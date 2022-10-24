import React from "react";
import { Icon } from "@iconify/react";

const PageNumber = () => {
  return (
    <div className="flex gap-2 my-5">
      <div className="bg-gray-300 w-10 h-10 hover:bg-blue flex items-center justify-center text-gray-500 hover:text-white rounded-full cursor-pointer">
        <Icon icon="akar-icons:arrow-left" />
      </div>
      <div className="bg-gray-300 w-10 h-10 hover:bg-blue flex items-center justify-center text-gray-500 hover:text-white rounded-full cursor-pointer">
        1
      </div>
      <div className="bg-gray-300 w-10 h-10 hover:bg-blue flex items-center justify-center text-gray-500 hover:text-white rounded-full cursor-pointer">
        2
      </div>
      <div className="bg-gray-300 w-10 h-10 hover:bg-blue flex items-center justify-center text-gray-500 hover:text-white rounded-full cursor-pointer">
        3
      </div>
      <div className="bg-gray-300 w-10 h-10 hover:bg-blue flex items-center justify-center text-gray-500 hover:text-white rounded-full cursor-pointer">
        4
      </div>
      <div className="bg-gray-300 w-10 h-10 hover:bg-blue flex items-center justify-center text-gray-500 hover:text-white rounded-full cursor-pointer">
        ...
      </div>
      <div className="bg-gray-300 w-10 h-10 hover:bg-blue flex items-center justify-center text-gray-500 hover:text-white rounded-full cursor-pointer">
        <Icon icon="akar-icons:arrow-right" />
      </div>
    </div>
  );
};

export default PageNumber;
