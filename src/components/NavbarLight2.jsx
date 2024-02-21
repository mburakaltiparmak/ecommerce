import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faMagnifyingGlass,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import Dropdown from "../components/Dropdown";
import { useHistory, useLocation } from "react-router-dom";
const NavbarLight2 = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <div
      id="navbar-light"
      className="flex sm:w-full sm:flex-col justify-between items-center bg-white xl:px-40 py-3 sm:px-0 sm:pb-12 xl:gap-10 "
    >
      <span className="flex sm:flex-col xl:gap-14 sm:justify-between sm:px-5 sm:w-full">
        <span
          id="top-bar"
          className="flex flex-row justify-between text-darkblue1 sm:w-full"
        >
          <button
            onClick={() => history.push("/home")}
            className="font-bold text-lg sm:text-base 2xl:pr-4 md:pr-8 text-[#252b42]"
          >
            BrandName
          </button>
          <span className="xl:hidden sm:flex flex-row gap-4 justify-end sm:w-full">
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
        <label className="sm:flex-col font-bold items-start sm:items-center sm:text-2xl sm:font-normal  text-sm gap-5 flex leading-6 px-[50px] text-[#252b42] sm:w-full">
          <button onClick={() => history.push("/home")}>Home</button>
          <button onClick={() => history.push("/product")}>Product</button>
          <button onClick={() => history.push("/pricing")}>Pricing</button>
          <button onClick={() => history.push("/contact")}>Contact</button>
        </label>
      </span>
      <span className="sm:hidden">
        <label
          id="navbar-nav"
          htmlFor=""
          className="flex items-center justify-between gap-8 md:gap-8 text-[#23a6f0]"
        >
          <button
            id="navbar-nav-icons"
            className="flex text-sm font-bold text-center gap-1 items-center "
          >
            Login
          </button>
          <button className="flex text-sm font-bold text-center gap-3 items-center border rounded-md bg-blue1 text-white p-3">
            Become a member <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </label>
      </span>
    </div>
  );
};
export default NavbarLight2;
