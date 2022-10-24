import React, { useState } from "react";
import { Icon } from "@iconify/react";
import CardData from "../data/Data";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";

const Cards = ({ grid }) => {
  // const [cart, setCart] = useState([]);

  // const handleClick = (item) => {
  //   cart.push(item);
  //   console.log(cart);
  // };

  const {
    state: { cart },
    dispatch,
  } = CartState();
  console.log(cart);
  return (
    <div>
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:${grid} gap-2`}>
        {/* card */}

        {CardData.map((item) => {
          return (
            <div
              key={item.id}
              className="border-[2px] rounded-xl flex flex-col p-5"
            >
              <div className="text-blue text-2xl self-end cursor-pointer">
                <Icon icon="akar-icons:heart" />
              </div>
              <Link to={`${item.id}`} className="self-center">
                <img
                  src={item.img}
                  alt="card image"
                  className="h-[170px] my-5"
                />
              </Link>
              <div className="">
                <div className="">
                  <p className="text-sm text-gray-500">Beverage</p>
                  <Link to={`${item.id}`}>
                    <h4 className="text-lg font-medium truncate">
                      {item.name}
                    </h4>
                  </Link>
                </div>
                <div className="mt-3">
                  <h2 className="text-2xl font-semibold text-blue">
                    {item.price}
                  </h2>
                  <p className="text-sm text-gray-500">500 gram</p>
                </div>
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
                <div className="">
                  <button
                    // onClick={() => handleClick(item)}
                    onClick={() => {
                      dispatch({ type: "ADD_TO_CART", payload: item });
                    }}
                    className="flex items-center justify-center bg-blue text-white rounded-md text-sm sm:text-lg font-medium p-3 w-full gap-1 sm:gap-4 border-[2px] border-blue hover:bg-transparent hover:text-blue"
                  >
                    <Icon icon="bi:cart" /> Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
