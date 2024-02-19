import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const NavbarDark = () => {
  const phoneText = "(225) 555-0118";
  const mailText = "michelle.rivera@example.com";
  return (
    <div
      id="navbar-dark"
      className="flex justify-between font-bold text-sm items-center px-40 py-4 bg-darkblue1"
    >
      <label id="contact" htmlFor="contact" className="flex items-center gap-8">
        <span className="flex " id="contact-span">
          <p className="flex text-center items-center gap-2 " id="contact-logo">
            <FontAwesomeIcon icon={faPhone} />
            {phoneText}
          </p>
        </span>
        <span className="flex" id="contact-span">
          <a
            className="flex text-center gap-2 items-center "
            href=""
            id="contact-logo"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            {mailText}
          </a>
        </span>
      </label>
      <p>Follow Us and get a chance to win 80% off</p>
      <label
        id="social-media"
        htmlFor=""
        className="flex pb-2 items-center gap-4 md:gap-8"
      >
        <p className="">Follow Us :</p>
        <span id="social-media-logos" className="flex gap-4 items-center  ">
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
  );
};
export default NavbarDark;
