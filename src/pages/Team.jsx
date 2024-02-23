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
import { data } from "../data.js";

const Team = () => {
  const { member, boxGroup } = data();
  return (
    <div className="flex justify-center flex-col px-40 sm:px-0">
      <section id="top-section" className="section-class flex-col gap-8">
        <h5 className="h5-styles">WHAT WE DO</h5>
        <h2 className="h2-styles sm:w-full sm:flex sm:items-center sm:text-4xl">
          Innovation tailored for you
        </h2>
        <Breadcrumb3 />
      </section>
      <section
        id="box-section"
        className="flex flex-row sm:flex-col gap-3 sm:gap-1 px-20 sm:px-0"
      >
        <span id="main-box" className="w-full ">
          <img className="w-[730px] h-[530px] object-cover" src={mainImg} />
        </span>
        <span
          id="img-box"
          className="flex flex-row flex-wrap gap-3 sm:gap-1 items-center"
        >
          <span id="box-1" className="flex flex-row gap-3 sm:gap-1 ">
            {boxGroup.slice(0, 2).map((img, index) => (
              <span key={index} id="box-group" className="">
                <img src={img} className="w-[360px] h-[260px]" alt="" />
              </span>
            ))}
          </span>
          <span id="box-2" className="flex flex-row gap-3 sm:gap-1">
            {boxGroup.slice(2).map((img, index) => (
              <span key={index + 2} id="box-group" className="">
                <img src={img} className="w-[360px] h-[260px]" alt="" />
              </span>
            ))}
          </span>
        </span>
      </section>
      <section id="team-section" className="section-class flex-col gap-12">
        <h3 className="h3-styles">Meet Our Team</h3>
        <span
          id="team"
          className="flex flex-row flex-wrap gap-5 sm:gap-8 justify-center "
        >
          {member.map((member, index) => (
            <span key={index} id="member-1" className="team-span">
              <img src={member.img} />
              <h5>{member.username}</h5>
              <p className="p-styles">{member.job}</p>
              <span id="social-media" className="social-media">
                <a href="https://www.instagram.com/">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.facebook.com/">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.twitter.com/">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </span>
            </span>
          ))}
        </span>
      </section>
      <section id="trial-section" className="section-class flex-col gap-8">
        <h3 className="h3-styles sm:w-full">Start your 14 days free trial</h3>
        <p className="p-styles w-1/3 sm:w-full">
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
