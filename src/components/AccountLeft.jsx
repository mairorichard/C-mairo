import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const TabData = [
  {
    id: "1",
    icon: <Icon icon="bx:user" className="text-[1.5rem]" />,
    name: "Account Information",
    link: "/account",
  },
  {
    id: "2",
    icon: <Icon icon="ant-design:setting-outlined" className="text-[1.5rem]" />,
    name: "Orders List",
    link: "/orderslist",
  },
  {
    id: "3",
    icon: <Icon icon="bx:shopping-bag" className="text-[1.5rem]" />,
    name: "Wallet",
    link: "/wallet",
  },
  {
    id: "4",
    icon: <Icon icon="akar-icons:location" className="text-[1.5rem]" />,
    name: "My address",
    link: "/myaddress",
  },
  {
    id: "5",
    icon: <Icon icon="bx:user" className="text-[1.5rem]" />,
    name: "Referral Code",
    link: "/referralcode",
  },
  {
    id: "6",
    icon: <Icon icon="mi:log-out" className="text-[1.5rem]" />,
    name: "Log out",
    link: "/login",
  },
];

const AccountLeft = () => {
  return (
    <div className="flex-[1] flex flex-col gap-2">
      {TabData.map((item) => {
        return (
          <NavLink
            key={item.id}
            to={item.link}
            className="text-base font-medium flex items-center justify-center md:justify-start gap-3 py-3 px-4 rounded-lg border text-gray-500"
          >
            {item.icon}
            <p className="hidden md:block">{item.name}</p>
          </NavLink>
        );
      })}
    </div>
  );
};

export default AccountLeft;
