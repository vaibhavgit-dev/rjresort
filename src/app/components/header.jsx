"use client";
import React, { useState } from "react";
import "@/app/assets/css/custom.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState("");

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (menu) => {
    setActiveSubmenu((prevMenu) => (prevMenu === menu ? "" : menu));
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveSubmenu("");
  };

  return (
    <header className="flex bg-white shadow-md py-4 px-4 sm:px-10 font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
      {/* Overlay for mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMenu}
        ></div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <a href="#" className="">
          <img src="/rj_logo.png" alt="logo" className="w-24" />
        </a>
        {/* Mobile Close Button */}
        <div
          id="collapseMenu"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 lg:!block`}
        >
          {/* Close icon for mobile */}
          <button
            className="absolute top-4 right-4 text-gray-500 lg:hidden"
            onClick={closeMenu}
          >
            <AiOutlineClose size={24} />
          </button>
          <ul className="lg:flex gap-x-5 max-lg:space-y-3">
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <a
                href="#"
                className="hover:text-themecolor-themebrown text-themecolor-themebrown block font-semibold text-[15px]"
              >
                Home
              </a>
            </li>
            {["darjeeling", "siliguri"].map((menu) => (
              <li
                key={menu}
                className="max-lg:border-b border-gray-300 max-lg:py-3 px-3 relative"
              >
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="hover:text-themecolor-themebrown text-gray-500 block font-semibold text-[15px]"
                  >
                    {menu.charAt(0).toUpperCase() + menu.slice(1)}
                  </a>
                  <button
                    className="ml-2 text-gray-500 hover:text-themecolor-themebrown"
                    onClick={() => toggleSubmenu(menu)}
                  >
                    <RiArrowDropDownLine
                      className={`transform transition-transform ${
                        activeSubmenu === menu ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {activeSubmenu === menu && (
                  <ul className="absolute bg-white shadow-lg p-5 space-y-2 left-0 mt-2 rounded-lg transition-all duration-300 ease-in-out w-[280px] max-lg:w-[200px]">
                    {[
                      "OVERVIEW",
                      "STAY",
                      "DINING",
                      "WEDDING MEETINGS & EVENTS",
                      "SPA",
                      "LOCATION",
                      "THINGS TO DO",
                      "GALLERY",
                    ].map((submenu, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="hover:text-themecolor-themebrown text-gray-500 block text-[14px]"
                        >
                          {submenu}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <a
                href="#"
                className="hover:text-themecolor-themebrown text-gray-500 block font-semibold text-[15px]"
              >
                Careers
              </a>
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <a
                href="#"
                className="hover:text-themecolor-themebrown text-gray-500 block font-semibold text-[15px]"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="flex max-lg:ml-auto space-x-4">
          <button className="px-4 py-2 text-sm rounded-full font-bold text-themecolor-themebrown border-2 border-themecolor-themebrown bg-transparent hover:bg-themecolor-themebrown hover:text-white transition-all ease-in-out duration-300">
            Login
          </button>
          <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-themecolor-themebrown bg-themecolor-themebrown transition-all ease-in-out duration-300 hover:bg-transparent hover:text-themecolor-themebrown">
            Sign up
          </button>
          <button id="toggleOpen" className="lg:hidden" onClick={handleToggle}>
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
