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

const Footer = () => {
  const history = useHistory();
  const pathname = useLocation();
  return (
    <div
      className="flex flex-col md:items-center justify-between px-32 py-8 gap-8 font-Montserrat"
   
    >
        <section
          className="flex flex-row justify-between  bg-white md:flex-col md:items-center md:gap-4 md:bg-lightgray md:py-8"
       
        >
            <h2 className="text-xl md:text-3xl font-bold text-darkblue1">BrandName</h2>

          <span
            className="flex flex-row gap-4 text-lg md:text-2xl text-blue1"
      
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
          </span>
        </section>
        <section
          className="flex flex-row justify-between md:flex-col md:items-center md:gap-8"
          id="middle-container"
        >
          <span
            className="flex flex-col md:items-center gap-4 text-base md:text-xl font-semibold text-gray"
            id="col-1"
          >
            <h5 className="text-lg md:text-2xl text-darkblue1 font-bold">
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
            className="flex flex-col md:items-center gap-4 text-base md:text-xl font-semibold text-gray"
            id="col-2"
          >
            <h5 className="text-lg md:text-2xl text-darkblue1 font-bold">
              Legal
            </h5>
            <a href="">About Us</a>
            <a href="">Carrier</a>
            <a href="/team">We are hiring</a>
            <a href="">Blog</a>
          </span>
          <span
            className="flex flex-col md:items-center gap-4 text-base md:text-xl font-semibold text-gray"
            id="col-3"
          >
            <h5 className="text-lg md:text-2xl text-darkblue1 font-bold">
              Features
            </h5>
            <a href="">Business Marketing</a>
            <a href="">User Analytic</a>
            <a href="">Live Chat</a>
            <a href="">Unlimited Support</a>
          </span>
          <span
            className="flex flex-col md:items-center gap-4 text-base md:text-xl font-semibold text-gray"
            id="col-4"
          >
            <h5 className="text-lg md:text-2xl text-darkblue1 font-bold">
              Resources
            </h5>
            <a href="">IOS & Android</a>
            <a href="">Watch a Demo</a>
            <a href="">Customers</a>
            <a href="">API</a>
          </span>
          <span
            className="flex flex-col md:items-center gap-4 text-base md:text-xl font-semibold text-gray"
            id="col-5"
          >
            <h5 className="text-lg md:text-2xl text-darkblue1 font-bold">
              Get In Touch
            </h5>
            <MailForm />
            <p className="text-sm md:text-lg">Lorem ipsum</p>
          </span>
        </section>
        <section
          className="py-10 bg-lightgray md:px-0 md:text-center md:items-center font-bold text-sm md:text-lg text-gray"
          id="bottom-container"
        >
          <p>Made With By Burak Altıparmak</p>
        </section>
      
    </div>
  );
};
export default Footer;
