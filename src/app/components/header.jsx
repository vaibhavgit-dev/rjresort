"use client"
import React, { useState } from "react";
import "@/app/assets/css/custom.css";
import { RiArrowDropDownLine } from "react-icons/ri";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submenus, setSubmenus] = useState({
    darjeeling: false,
    siliguri: false,
  });

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (menu) => {
    setSubmenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <header className="flex bg-white shadow-md py-4 px-4 sm:px-10 font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <a href="javascript:void(0)" className="">
          <img src="/rj_logo.png" alt="logo" className="w-24" />
        </a>
        <div
          id="collapseMenu"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 lg:!block`}
        >
          <ul className="lg:flex gap-x-5 max-lg:space-y-3">
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <a href="#" className="hover:text-themecolor-themebrown text-themecolor-themebrown block font-semibold text-[15px]">
                Home
              </a>
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3 relative">
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="hover:text-themecolor-themebrown text-gray-500 block font-semibold text-[15px]"
                >
                  Darjeeling
                </a>
                <button
                  className="ml-2 text-gray-500 hover:text-themecolor-themebrown"
                  onClick={() => toggleSubmenu("darjeeling")}
                >
                  <RiArrowDropDownLine />
                </button>
              </div>
              {submenus.darjeeling && (
                 <ul className="absolute bg-white shadow-lg p-3 space-y-2 left-0 mt-2">
                 <li>
                   <a href="#" className="hover:text-themecolor-themebrown text-gray-500 block text-[14px]">
                   OVERVIEW
                   </a>
                 </li>
                 <li>
                   <a href="#" className="hover:text-themecolor-themebrown text-gray-500 block text-[14px]">
                   STAY
                   </a>
                 </li>
                 <li>
                   <a href="#" className="hover:text-themecolor-themebrown text-gray-500 block text-[14px]">
                   DINING
                   </a>
                 </li>
                 <li>
                   <a href="#" className="hover:text-themecolor-themebrown text-gray-500 block text-[14px]">
                   WEDDING MEETINGS & EVENTS
                   </a>
                 </li>
                 <li>
                   <a href="#" className="hover:text-themecolor-themebrown text-gray-500 block text-[14px]">
                   SPA
                   </a>
                 </li>
                 <li>
                   <a href="#" className="hover:text-themecolor-themebrown text-gray-500 block text-[14px]">
                   LOCATION
                   </a>
                 </li>
                 <li>
                   <a href="#" className="hover:text-themecolor-themebrown text-gray-500 block text-[14px]">
                   THINGS TO DO
                   </a>
                 </li>
                 <li>
                   <a href="#" className="hover:text-themecolor-themebrown text-gray-500 block text-[14px]">
                   GALLERY
                   </a>
                 </li>
               </ul>
              )}
            </li>
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3 relative">
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="hover:text-themecolor-themebrown text-gray-500 block font-semibold text-[15px]"
                >
                  Siliguri
                </a>
                <button
                  className="ml-2 text-gray-500 hover:text-themecolor-themebrown"
                  onClick={() => toggleSubmenu("siliguri")}
                >
                  <RiArrowDropDownLine />
                </button>
              </div>
              {submenus.siliguri && (
                <ul className="absolute bg-white shadow-lg p-3 space-y-2 left-0 mt-2">
                <li>
                  <a href="#" className="hover:text-themecolor-themebrown text-gray-500 block text-[14px]">
                  OVERVIEW
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-themecolor-themebrown text-gray-500 block text-[14px]">
                  STAY
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-themecolor-themebrown text-gray-500 block text-[14px]">
                  DINING
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-themecolor-themebrown text-gray-500 block text-[14px]">
                  WEDDING MEETINGS & EVENTS
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-themecolor-themebrown text-gray-500 block text-[14px]">
                  LOCATION
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-themecolor-themebrown text-gray-500 block text-[14px]">
                  GALLERY
                  </a>
                </li>
              </ul>
              )}
            </li>
            <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><a href='#'
              className='hover:text-themecolor-themebrown text-gray-500 block font-semibold text-[15px]'>Careers</a>
            </li>
            <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><a href='#'
              className='hover:text-themecolor-themebrown text-gray-500 block font-semibold text-[15px]'>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="flex max-lg:ml-auto space-x-4">
          <button className="px-4 py-2 text-sm rounded-full font-bold text-themecolor-themebrown border-2 border-themecolor-themebrown bg-transparent hover:themecolor-themebrown hover:text-themecolor-themebrown transition-all ease-in-out duration-300">
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
