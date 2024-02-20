import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTurnDown,
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import contactImg from "../assets/contact/contactimg.png";
const Contact = () => {
  return (
    <div className="flex flex-col text-center  font-montserrat font-bold px-40 py-0 pb-10 gap-12">
      <section
        id="contact-us"
        className="flex flex-row justify-between items-center"
      >
        <span
          id="text-box"
          className="flex flex-col text-darkblue1 gap-12 items-start"
        >
          <h3 className="h4-styles">CONTACT US</h3>
          <h1 className="text-5xl w-3/4 text-start">Get in touch today!</h1>
          <h3 className="h4-styles text-gray w-3/4 text-start">
            We know how large objects will act, but things on a small scale
          </h3>
          <h4 className="h3-styles text-2xl">Phone ; +451 215 215 </h4>
          <h4 className="h3-styles text-2xl">Fax : +451 215 215</h4>
          <span
            id="social-media"
            className="social-media text-2xl text-darkblue1 gap-8"
          >
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.twitter.com/">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </span>
        </span>
        <span id="img-box" className="">
          <img src={contactImg} className="" />
        </span>
      </section>
      <section id="get-support" className="flex flex-col gap-12 items-center">
        <span id="texts" className="flex flex-col gap-5 w-2/3">
          <h5 className="h5-styles text-darkblue1">VISIT OUR OFFICE</h5>
          <h2 className="h2-styles items-center">
            We help small businesses with big ideas
          </h2>
        </span>
        <span id="boxes" className="flex flex-row justify-center w-1/2">
          <span id="box-1" className="box-style border-none">
            <FontAwesomeIcon icon={faPhone} className="text-6xl text-blue1" />
            <p className="p-styles w-full">georgia.young@example.com</p>
            <p className="p-styles w-full">georgia.young@ple.com</p>
            <h5 className="h5-styles text-darkblue1">Get Support</h5>
            <button className="border border-blue1 rounded-3xl items-center text-center text-blue1 text-sm py-2 px-3">
              Submit Request
            </button>
          </span>
          <span
            id="box-2"
            className="box-style border-none rounded-none bg-darkblue1"
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-6xl text-blue1"
            />
            <p className="p-styles w-full text-white">
              georgia.young@example.com
            </p>
            <p className="p-styles w-full text-white">georgia.young@ple.com</p>
            <h5 className="h5-styles text-white">Get Support</h5>
            <button className="border border-blue1 rounded-3xl items-center text-center text-blue1 text-sm py-2 px-3">
              Submit Request
            </button>
          </span>
          <span id="box-3" className="box-style border-none">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-6xl text-blue1"
            />
            <p className="p-styles w-full">georgia.young@example.com</p>
            <p className="p-styles w-full">georgia.young@ple.com</p>
            <h5 className="h5-styles text-darkblue1">Get Support</h5>
            <button className="border border-blue1 rounded-3xl items-center text-center text-blue1 text-sm py-2 px-3">
              Submit Request
            </button>
          </span>
        </span>
      </section>
      <section
        id="lets-talk"
        className="flex flex-col gap-5 justify-center items-center font-bold"
      >
        <FontAwesomeIcon className="text-blue1 text-8xl" icon={faTurnDown} />
        <h5 className="h5-styles text-darkblue1">WE Can't WAIT TO MEET YOU</h5>
        <h3 className="h3-styles text-darkblue1">Let's Talk</h3>
        <button className="border border-blue1 rounded-md text-center bg-blue1 w-32 px-1 py-2 text-white text-sm">
          Try it free now
        </button>
      </section>
    </div>
  );
};
export default Contact;
