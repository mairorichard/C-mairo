import React from "react";
import { Icon } from "@iconify/react";
import Wt1 from "../assets/table/wt1.png";
import Wt2 from "../assets/table/wt2.png";
import Wt3 from "../assets/table/wt3.png";

const WtData = [
  {
    id: "1",
    img: Wt1,
    name: "Table Water 75cl (On the Go)",
    price: "N2050.00",
    stockStatus: (
      <strong class="rounded-md bg-green-100 px-3 py-1.5 text-xs font-medium text-green-700">
        In Stock
      </strong>
    ),
    action: (
      <button className="bg-blue py-2 px-3 text-white rounded-md">
        Add to Cart
      </button>
    ),
  },
  {
    id: "2",
    img: Wt2,
    name: "Table Water 75cl (On the Go)",
    price: "N2050.00",
    stockStatus: (
      <strong class="rounded-md bg-green-100 px-3 py-1.5 text-xs font-medium text-green-700">
        In Stock
      </strong>
    ),
    action: (
      <button className="bg-blue py-2 px-3 text-white rounded-md">
        Add to Cart
      </button>
    ),
  },
  {
    id: "3",
    img: Wt3,
    name: "Table Water 75cl (On the Go)",
    price: "N2050.00",
    stockStatus: (
      <strong class="rounded-md bg-green-100 px-3 py-1.5 text-xs font-medium text-green-700">
        In Stock
      </strong>
    ),
    action: (
      <button className="bg-blue py-2 px-3 text-white rounded-md">
        Add to Cart
      </button>
    ),
  },
  {
    id: "4",
    img: Wt1,
    name: "Table Water 75cl (On the Go)",
    price: "N2050.00",
    stockStatus: (
      <strong class="rounded bg-red-200 px-3 py-1.5 text-xs font-medium text-red-600">
        Out Of Stock
      </strong>
    ),
    action: (
      <button className="bg-darkblue py-2 px-3 text-white rounded-md">
        Contact Us
      </button>
    ),
  },
  {
    id: "5",
    img: Wt2,
    name: "Table Water 75cl (On the Go)",
    price: "N2050.00",
    stockStatus: (
      <strong class="rounded-md bg-green-100 px-3 py-1.5 text-xs font-medium text-green-700">
        In Stock
      </strong>
    ),
    action: (
      <button className="bg-blue py-2 px-3 text-white rounded-md">
        Add to Cart
      </button>
    ),
  },
];

const WishListTable = () => {
  return (
    <div className="my-10">
      {/* main table */}
      <div class="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
        <table class="min-w-full divide-y divide-gray-200 text-sm">
          <thead class="bg-gray-100">
            <tr>
              <th class="sticky inset-y-0 left-0 bg-gray-100 px-4 py-2 text-left">
                <label class="sr-only" for="SelectAll">
                  Select All
                </label>

                <input
                  class="h-5 w-5 rounded border-gray-200"
                  type="checkbox"
                  id="SelectAll"
                />
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div class="flex items-center gap-2">Products</div>
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div class="flex items-center gap-2">Unit Price</div>
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div class="flex items-center gap-2">Stock Status</div>
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div class="flex items-center gap-2">Action</div>
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Remove
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            {WtData.map((item) => {
              return (
                <tr key={item.id}>
                  <td class="sticky inset-y-0 left-0 bg-white px-4 py-2">
                    <label class="sr-only" for="Row1">
                      Row 1
                    </label>

                    <input
                      class="h-5 w-5 rounded border-gray-200"
                      type="checkbox"
                      id="Row1"
                    />
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    <div className="flex items-center gap-4">
                      <div className="p-2 border rounded-lg w-28 flex items-center justify-center">
                        <img src={item.img} alt="" className="" />
                      </div>
                      <div className="">
                        <h4 className="font-medium text-lg text-darkblue">
                          {item.name}
                        </h4>
                        <div className="flex gap-2 items-center my-1">
                          <div className="flex gap-1">
                            <div className="text-yellow-400">
                              <Icon icon="ant-design:star-filled" />
                            </div>

                            <div className="text-yellow-400">
                              <Icon icon="ant-design:star-filled" />
                            </div>

                            <div className="text-yellow-400">
                              <Icon icon="ant-design:star-filled" />
                            </div>

                            <div className="text-yellow-400">
                              <Icon icon="ant-design:star-filled" />
                            </div>

                            <div className="text-gray-300">
                              <Icon icon="ant-design:star-filled" />
                            </div>
                          </div>
                          <p className="text-sm text-gray-400">(4.0)</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 text-blue font-bold text-2xl">
                    {item.price}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                    {item.stockStatus}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                    {item.action}
                  </td>
                  <td class="whitespace-nowrap px-4 py-2">
                    <Icon
                      icon="akar-icons:circle-x"
                      className="text-[1.5rem] text-gray-500"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishListTable;
