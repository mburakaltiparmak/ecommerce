import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Breadcrumb3 } from "../components/Breadcrumb3";
import mainImg from "../assets/team/box/1.png";

const Team = () => {
  return (
    <div>
      <section id="top-section" className="section-class flex-col gap-8">
        <h5 className="h5-styles">WHAT WE DO</h5>
        <h2 className="h2-styles">Innovation tailored for you</h2>
        <Breadcrumb3 />
      </section>
      <section
        id="box-section"
        className="section-class flex-row gap-2 px-0 py-0"
      >
        <span id="main-box">
          <img src={mainImg} />
        </span>
        <span id="box-group" className="flex flex-row gap-2">
          <img src="" alt="" />
        </span>
      </section>
      <section id="team-section" className="section-class flex-col">
        <h3 className="h3-styles">Meet Our Team</h3>
        <span id="team"></span>
      </section>
      <section id="trial-section" className="section-class flex-col gap-8">
        <h3 className="h3-styles">Start your 14 days free trial</h3>
        <p className="p-styles w-1/3">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="text-center border border-blue1 rounded-lg px-5 py-3 bg-blue1 text-white font-bold text-sm">
          Try it free now
        </button>
        <span id="social-media" className="social-media text-2xl gap-8">
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
      </section>
    </div>
  );
};
export default Team;
