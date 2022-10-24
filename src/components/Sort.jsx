import React from "react";
import { Icon } from "@iconify/react";

const Sort = () => {
  return (
    <div className="flex justify-between p-3 gap-5 rounded-md bg-gray-200 mb-4">
      <p className="text-md font-medium text-gray-400">
        There are <span className="text-blue">568</span> products in this
        category
      </p>

      <div className="flex gap-4">
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <Icon icon="ph:squares-four-light" className="text-2xl" />
          <p className="hidden sm:block">
            Show: <span className="text-gray-800">50</span>
          </p>
          <Icon icon="dashicons:arrow-down-alt2" className="text-xl" />
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-500">
          <Icon icon="icons8:generic-sorting" className="text-2xl" />
          <p className="hidden sm:block">Sort by: Featured</p>
          <Icon icon="dashicons:arrow-down-alt2" className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Sort;
