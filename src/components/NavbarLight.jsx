import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import Dropdown from "../components/Dropdown";
import { useHistory, useLocation } from "react-router-dom";
const NavbarLight = () => {
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
          <Dropdown />
          <button onClick={() => history.push("/about")}>About</button>
          <button onClick={() => history.push("/blog")}>Blog</button>
          <button onClick={() => history.push("/contact")}>Contact</button>
          <button onClick={() => history.push("/pages")}>Pages</button>
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
            className="flex  text-sm text-center gap-1 items-center "
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
