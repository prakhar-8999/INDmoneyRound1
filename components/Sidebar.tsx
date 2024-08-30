"use client";
import menu, {menuInterface} from "@/constants/menuJson";
import {FaChevronDown} from "react-icons/fa";
import {IoSearchOutline} from "react-icons/io5";
import {PiHeadsetBold} from "react-icons/pi";
import {RxCross1} from "react-icons/rx";

import {LogoImageUrl} from "@/constants/ImageUrl";
import Image from "next/image";
import {useState} from "react";

const MenuItem = ({item}: {item: menuInterface}) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <li>
      <a
        href={item.url}
        onClick={(e) => {
          if (item.submenu) {
            e.preventDefault();
            toggleMenu();
          }
        }}
        className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-200 transition-colors duration-300"
      >
        {item.title}
        {item.submenu && (
          <span
            className={`ml-2 transform transition-transform duration-300 ${
              open && "rotate-180"
            }`}
          >
            <FaChevronDown />
          </span>
        )}
      </a>
      {item.submenu && (
        <ul className={`pl-4 ${open ? "block" : "hidden"}`}>
          {item.submenu.map((subItem: menuInterface, index: number) => (
            <MenuItem key={index} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Sidebar = () => {
  return (
    <div className="w-full max-w-sm">
      <div className="flex justify-between">
        <Image
          alt="IND Money logo"
          width="100"
          height="100"
          src={LogoImageUrl}
        />

        <div className="flex gap-x-5 justify-center items-center">
          <button
            type="button"
            className="text-green-600 bg-white border border-green-600 focus:outline-none focus:ring-4 focus:ring-green-600 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
          >
            Log In
          </button>
          <PiHeadsetBold size={25} />
          <IoSearchOutline size={25} />
          <RxCross1 size={25} />
        </div>
      </div>

      <nav className="w-full bg-white shadow-xl rounded-lg">
        <ul className="divide-y divide-gray-200">
          {menu.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
