import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faCartShopping,
  faHeart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import Dropdown from "../components/Dropdown";
import { useHistory, useLocation } from "react-router-dom";
const NavbarLight = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <div
      id="navbar-light"
      className="flex justify-between items-center bg-white px-40 py-3 gap-10 sm:px-0 sm:pb-12 sm:flex-col"
    >
      <span className="flex sm:flex-col gap-14 sm:justify-between sm:px-10 sm:py-5 sm:w-full">
        <span className="sm:flex sm:flex-row" id="top-bar">
          <button
            onClick={() => history.push("/home")}
            className="font-bold text-lg sm:text-xl pr-4 md:pr-8 text-[#252b42]"
          >
            BrandName
          </button>
          <span
            id="mobile-bar"
            className="sm:flex flex-row gap-4 justify-end sm:w-full text-darkblue1"
          >
            <button
              className="sm:flex text-center gap-1 items-center"
              id="navbar-nav-icons"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <button
              className="flex text-center gap-1 items-center"
              id="navbar-nav-icons"
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
            <button
              className="flex text-center gap-1 items-center"
              id="navbar-nav-icons"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </span>
        </span>
        <label className="font-bold items-start sm:flex-col sm:items-center sm:text-2xl sm:text-gray  text-sm gap-5 flex leading-6 px-[50px] text-[#252b42]">
          <button onClick={() => history.push("/home")}>Home</button>
          <span
            className={`${
              pathname === "/shop" || pathname === "/product" ? "" : "sm:hidden"
            }`}
          >
            <Dropdown />
          </span>

          <button
            className={`${
              pathname === "/shop" || pathname === "/product" ? "" : "sm:hidden"
            }`}
            onClick={() => history.push("/about")}
          >
            About
          </button>
          <button
            className={`${
              pathname === "/shop" || pathname === "/product" ? "" : "sm:hidden"
            }`}
            onClick={() => history.push("/blog")}
          >
            Blog
          </button>
          <button onClick={() => history.push("/contact")}>Contact</button>
          <button
            className={`${
              pathname === "/shop" || pathname === "/product" ? "" : "sm:hidden"
            }`}
            onClick={() => history.push("/pages")}
          >
            Pages
          </button>
          <span
            id="mobile-bar"
            className={`${
              pathname === "/shop" || pathname === "/product" ? "sm:hidden" : ""
            } flex flex-col gap-5`}
          >
            <button className="" onClick={() => history.push("/pricing")}>
              Pricing
            </button>
            <button onClick={() => history.push("/product")}>Product</button>
          </span>
        </label>
      </span>

      <span
        className={`${
          pathname === "/shop" || pathname === "/product" ? "" : "sm:hidden"
        } `}
      >
        <label
          id="navbar-nav"
          htmlFor=""
          className="flex items-center justify-between gap-8 md:gap-8 text-[#23a6f0] sm:flex sm:flex-col sm:text-xl"
        >
          <button
            id="navbar-nav-icons"
            onClick={() => history.push("/login")}
            className="flex  text-sm font-bold sm:text-xl text-center gap-1 items-center "
          >
            <FontAwesomeIcon icon={faUser} />
            Login/Register
          </button>
          <button
            className="flex text-center gap-1 items-center"
            id="navbar-nav-icons"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <button
            className="flex text-center gap-1 items-center"
            id="navbar-nav-icons"
          >
            <FontAwesomeIcon icon={faCartShopping} />1
          </button>
          <button
            className="flex text-center gap-1 items-center"
            id="navbar-nav-icons"
          >
            <FontAwesomeIcon icon={faHeart} />2
          </button>
        </label>
      </span>
    </div>
  );
};
export default NavbarLight;
