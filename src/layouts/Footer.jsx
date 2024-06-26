import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { MailForm } from "../components/MailForm";
import { useHistory, useLocation } from "react-router-dom";
/*import "../styles/Footer.css";*/
const Footer = () => {
  const history = useHistory();
  const pathname = useLocation();
  return (
    <div
      className="flex justify-center  w-full font-Montserrat"
      id="footer-container"
    >
      <div id="footer-div" className=" flex flex-col gap-16 w-full">
        <section
          className="flex justify-between flex-row bg-white py-12 px-40 sm:px-5 sm:flex-col sm:gap-4 sm:bg-lightgray sm:py-8"
          id="top-container"
        >
          <label
            className="text-xl sm:text-3xl font-bold text-darkblue1"
            id="brand-name"
          >
            <h2>BrandName</h2>
          </label>
          <label
            className="flex flex-row gap-4 text-lg sm:text-2xl text-blue1"
            id="social-media"
          >
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.twitter.com/">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </label>
        </section>
        <section
          className="flex flex-row justify-between px-40 sm:px-5 sm:flex-col sm:gap-8"
          id="middle-container"
        >
          <span
            className="flex flex-col gap-4 text-base sm:text-xl font-semibold text-gray"
            id="col-1"
          >
            <h5 className="text-lg sm:text-2xl text-darkblue1 font-bold">
              Company Info
            </h5>
            <a className="" href="/about">
              About Us
            </a>
            <a href="">Carrier</a>
            <a href="/team">We are hiring</a>
            <a href="">Blog</a>
          </span>
          <span
            className="flex flex-col gap-4 text-base sm:text-xl font-semibold text-gray"
            id="col-2"
          >
            <h5 className="text-lg sm:text-2xl text-darkblue1 font-bold">
              Legal
            </h5>
            <a href="">About Us</a>
            <a href="">Carrier</a>
            <a href="/team">We are hiring</a>
            <a href="">Blog</a>
          </span>
          <span
            className="flex flex-col gap-4 text-base sm:text-xl font-semibold text-gray"
            id="col-3"
          >
            <h5 className="text-lg sm:text-2xl text-darkblue1 font-bold">
              Features
            </h5>
            <a href="">Business Marketing</a>
            <a href="">User Analytic</a>
            <a href="">Live Chat</a>
            <a href="">Unlimited Support</a>
          </span>
          <span
            className="flex flex-col gap-4 text-base sm:text-xl font-semibold text-gray"
            id="col-4"
          >
            <h5 className="text-lg sm:text-2xl text-darkblue1 font-bold">
              Resources
            </h5>
            <a href="">IOS & Android</a>
            <a href="">Watch a Demo</a>
            <a href="">Customers</a>
            <a href="">API</a>
          </span>
          <span
            className="flex flex-col gap-4 text-base sm:text-xl font-semibold text-gray"
            id="col-5"
          >
            <h5 className="text-lg sm:text-2xl text-darkblue1 font-bold">
              Get In Touch
            </h5>
            <MailForm />
            <p className="text-sm sm:text-lg">Lorem ipsum</p>
          </span>
        </section>
        <section
          className="px-40 py-10 bg-lightgray sm:px-0 sm:text-center sm:items-center font-bold text-sm sm:text-lg text-gray"
          id="bottom-container"
        >
          <p>Made With By Burak Altıparmak</p>
        </section>
      </div>
    </div>
  );
};
export default Footer;
