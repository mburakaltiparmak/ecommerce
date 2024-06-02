import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faCartShopping,
  faHeart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGravatar } from "use-gravatar";
import UserDdown from "./UserDdown";
import TestDropdown from "./TestDropdown";
import CartDropdown from "./CartDropdown";
const NavbarLight = (props) => {
  const history = useHistory();
  const { pathname } = useLocation();
  /* const { collapse, setCollapse, userCollapse, setUserCollapse } = props;*/
  const [collapse, setCollapse] = useState(
    window.matchMedia("(max-width: 640px)").matches
  );
  const [userCollapse, setUserCollapse] = useState(
    window.matchMedia("(max-width: 640px)").matches
  );

  const userData = useSelector((store) => store.userRed);
  const gravatar = useGravatar(userData.email);
  const nameAtStorage = localStorage.getItem("userName");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      id="navbar-light"
      className={`flex font-bold justify-between items-center lg:px-32 md:px-10 py-3 gap-10 lg:gap-6 bg-white px-40 ${
        !collapse && !userCollapse && "sm:pb-0"
      }  sm:px-0 sm:pb-12 sm:flex-col`}
    >
      <span
        id="main-1"
        className="flex sm:flex-col gap-14 sm:justify-between sm:px-10 sm:py-5 sm:w-full"
      >
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
            <button onClick={() => setUserCollapse(!userCollapse)}>
              <FontAwesomeIcon icon={faUser} />
            </button>
            <button
              className="flex text-center gap-1 items-center"
              id="navbar-nav-icons"
              onClick={() => {
                setCollapse(!collapse);
              }}
            >
              <FontAwesomeIcon icon={faBars} />
              <p className={`${collapse && "hidden"}`}>Menu</p>
            </button>
          </span>
        </span>

        <label
          id=""
          className={`font-bold items-start  text-sm gap-5 flex leading-6 px-[50px] text-[#252b42] ${
            !collapse && "sm:hidden"
          } sm:flex-col sm:items-center sm:text-2xl sm:text-gray`}
        >
          <button className="" onClick={() => history.push("/home")}>
            Home
          </button>

          <span>
            <TestDropdown />
          </span>

          <button className="" onClick={() => history.push("/about")}>
            About
          </button>
          <button className="hidden" onClick={() => history.push("/blog")}>
            Blog
          </button>
          <button className="" onClick={() => history.push("/contact")}>
            Contact
          </button>
          <button className="hidden" onClick={() => history.push("/pages")}>
            Pages
          </button>
          <span id="mobile-bar" className="flex flex-row sm:flex-col gap-4">
            <button className="" onClick={() => history.push("/pricing")}>
              Pricing
            </button>
            <button className="" onClick={() => history.push("/product")}>
              Product
            </button>
          </span>
        </label>
      </span>

      <span
        id="main-2"
        className={`${
          !collapse && !userCollapse && "sm:hidden"
        } flex flex-row w-full px-1 justify-end sm:justify-center`}
      >
        <label
          id="navbar-nav"
          htmlFor=""
          className={`${
            !userCollapse && "sm:hidden"
          } flex flex-row items-center justify-between text-center gap-8  md:gap-8 text-[#23a6f0] sm:flex sm:flex-col sm:text-xl`}
        >
          {userData.name || nameAtStorage ? (
            <span
              id="user-login"
              className="flex flex-row gap-2 lg:gap-4 items-center text-center lg:justify-between w-full  sm:gap-4 sm:flex-col"
            >
              <img src={gravatar} alt="" className="w-8 h-8" />
              <UserDdown />
            </span>
          ) : (
            <span
              id="user-login"
              className="flex flex-row gap-2 sm:gap-4 sm:flex-col"
            >
              <button
                id="navbar-nav-icons"
                onClick={() => history.push("/login")}
                className="flex  text-sm font-bold sm:text-xl text-center gap-1 sm:gap-2 items-center "
              >
                <FontAwesomeIcon icon={faUser} />
                Login
              </button>
              <p className="sm:hidden">/</p>
              <button
                id="navbar-nav-icons"
                onClick={() => history.push("/signup")}
                className="flex  text-sm font-bold sm:text-xl text-center gap-1 items-center "
              >
                Register
              </button>
            </span>
          )}
          <span className="flex flex-row gap-2">
            <button
              className="flex text-center gap-1 sm:gap-2 items-center sm:hidden"
              id="navbar-nav-icons"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <p className="lg:hidden sm:flex">Search</p>
            </button>
            <span className="flex text-center gap-1 items-center sm:hidden">
              <CartDropdown />
            </span>
            <button
              className="flex text-center gap-1 items-center"
              id="navbar-nav-icons"
            >
              <FontAwesomeIcon icon={faHeart} />2
            </button>
          </span>
        </label>
      </span>
    </div>
  );
};
export default NavbarLight;
