import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faUser,
  faMagnifyingGlass,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Dropdown from "../components/Dropdown";
import Slider from "../components/Slider";
import { useHistory } from "react-router-dom";

const Header = () => {
  const phoneText = "(225) 555-0118";
  const mailText = "michelle.rivera@example.com";
  const history = useHistory();
  return (
    <header className="w-full text-white font-Montserrat">
      <div
        id="navbar-dark"
        className="flex justify-between font-bold text-sm items-center bg-[#252b42] px-[38px]"
      >
        <label
          id="contact"
          htmlFor="contact"
          className="flex items-center gap-8"
        >
          <span className="flex" id="contact-span">
            <p className="flex text-center gap-2 " id="contact-logo">
              <FontAwesomeIcon icon={faPhone} />
              {phoneText}
            </p>
          </span>
          <span className="flex" id="contact-span">
            <a className="flex text-center gap-2 " href="" id="contact-logo">
              <FontAwesomeIcon icon={faEnvelope} />
              {mailText}
            </a>
          </span>
        </label>
        <p>Follow Us and get a chance to win 80% off</p>
        <label
          id="social-media"
          htmlFor=""
          className="flex h-20 pb-2 items-center gap-4 md:gap-8"
        >
          <p className="">Follow Us :</p>
          <span
            id="social-media-logos"
            className="flex gap-4 items-center pb-1 "
          >
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.youtube.com/">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.twitter.com/">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </span>
        </label>
      </div>
      <div
        id="navbar-light"
        className="flex justify-between items-center bg-white px-[38px] py-[17px] gap-10 "
      >
        <span className="flex gap-14">
          <h3 className="font-bold text-lg pr-4 md:pr-8 text-[#252b42]">
            BrandName
          </h3>
          <label className="font-bold items-start  text-sm gap-5 flex leading-6 px-[50px] text-[#252b42]">
            <button onClick={() => history.push("/")}>Home</button>
            <Dropdown />
            <button>About</button>
            <button>Blog</button>
            <button>Contact</button>
            <button>Pages</button>
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
      <hr />
    </header>
  );
};
export default Header;
