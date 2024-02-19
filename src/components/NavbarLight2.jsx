import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Dropdown from "../components/Dropdown";
import { useHistory, useLocation } from "react-router-dom";
const NavbarLight2 = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <div
      id="navbar-light"
      className="flex justify-between items-center bg-white px-40 py-3 gap-10 "
    >
      <span className="flex gap-14">
        <button
          onClick={() => history.push("/home")}
          className="font-bold text-lg pr-4 md:pr-8 text-[#252b42]"
        >
          BrandName
        </button>
        <label className="font-bold items-start  text-sm gap-5 flex leading-6 px-[50px] text-[#252b42]">
          <button onClick={() => history.push("/home")}>Home</button>
          <button onClick={() => history.push("/product")}>Product</button>
          <button onClick={() => history.push("/pricing")}>Pricing</button>
          <button onClick={() => history.push("/contact")}>Contact</button>
        </label>
      </span>
      <span>
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
