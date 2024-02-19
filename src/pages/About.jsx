import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faHooli,
  faLyft,
  faPiedPiperHat,
  faStripe,
  faAws,
  faRedditAlien,
} from "@fortawesome/free-brands-svg-icons";
import containerImg from "../assets/about/containerImg.png";
import containerImg2 from "../assets/about/containerImg2.png";
import videoImg from "../assets/about/videoImg.png";
import member1 from "../assets/about/member1.png";
import member2 from "../assets/about/member2.png";
import member3 from "../assets/about/member3.png";

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center font-montserrat">
      <section id="about-us" className="w-full flex justify-between px-40">
        <div
          id="container-fluid"
          className="flex flex-row-reverse items-center justify-between w-full"
        >
          <span id="img-container" className="">
            <img src={containerImg} alt="" />
          </span>
          <span id="text-container" className="flex flex-col gap-6  ">
            <h5 className="text-base text-darkblue1 font-bold tracking-[0.2px]">
              ABOUT COMPANY
            </h5>
            <h1 className="text-5xl font-bold text-[#252B42] tracking-[0.2px] w-3/4 ">
              ABOUT US
            </h1>
            <h4 className="text-xl text-[#737373] w-3/5 font-normal tracking-[0.2px]">
              We know how large objects will act, but things on a small scale.
            </h4>
            <span className="flex flex-row gap-2 items-center">
              <button className="p-3 flex border-solid border-[1px] bg-blue1 rounded-md w-40 justify-center  text-sm text-white font-bold tracking-normal">
                Get Quote Now
              </button>
            </span>
          </span>
        </div>
      </section>
      <section id="problems" className="flex flex-col gap-5 px-40">
        <span id="1" className="flex items-start">
          <h5 className="text-red text-sm font-bold">Problems trying</h5>
        </span>
        <span id="2" className="flex flex-row justify-between items-start">
          <h3 className="text-darkblue1 font-bold text-base w-1/5">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
          <p className="text-gray font-semibold text-sm w-2/5">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </span>
      </section>
      <section id="stats" className="section-class flex-row">
        <span className="span-styles">
          <h2 className="h2-styles">15K</h2>
          <p className="p-styles">Happy Customers</p>
        </span>
        <span className="span-styles">
          <h2 className="h2-styles">150K</h2>
          <p className="p-styles">Monthly Visitors</p>
        </span>
        <span className="span-styles">
          <h2 className="h2-styles">15</h2>
          <p className="p-styles">Countries Worldwide</p>
        </span>
        <span className="span-styles">
          <h2 className="h2-styles">100+</h2>
          <p className="p-styles">Top Partners</p>
        </span>
      </section>
      <section
        id="video"
        className="relative flex justify-center items-center w-full px-40 "
      >
        <img src={videoImg} className="w-full h-auto rounded-lg" />
        <button className="absolute t-1/2 w-full text-center ">
          <FontAwesomeIcon
            className="w-[48px] h-[48px] bg-white border border-blue1 rounded-full"
            icon={faCirclePlay}
            style={{ color: "#23A6F0" }}
          />
        </button>
      </section>
      <section id="team" className="section-class flex-col gap-10">
        <span id="text-span" className="flex flex-col items-center gap-5">
          <h2 className="h2-styles">Meet Our Team</h2>
          <p className="p-styles w-3/5">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </span>
        <span
          id="team-span"
          className="flex flex-row justify-between items-center w-full"
        >
          <span id="member-1" className="team-span">
            <img src={member1} />
            <h5>Username</h5>
            <p className="p-styles">Profession</p>
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
          <span id="member-2" className="team-span">
            <img src={member2} />
            <h5>Username</h5>
            <p className="p-styles">Profession</p>
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
          <span id="member-3" className="team-span">
            <img src={member3} />
            <h5>Username</h5>
            <p className="p-styles">Profession</p>
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
        </span>
      </section>
      <section
        id="companies"
        className="section-class flex-col bg-lightgray gap-10"
      >
        <span id="companies-text" className="flex flex-col items-center gap-5">
          <h2 className="h2-styles">Big Companies Are Here</h2>
          <p className="p-styles w-3/5">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </span>
        <span
          className="flex items-center text-center justify-between w-full font-bold text-7xl text-gray"
          id="logo-section"
        >
          <FontAwesomeIcon icon={faHooli} />
          <FontAwesomeIcon icon={faLyft} />
          <FontAwesomeIcon icon={faPiedPiperHat} />
          <FontAwesomeIcon icon={faStripe} />
          <FontAwesomeIcon icon={faAws} />
          <FontAwesomeIcon icon={faRedditAlien} />
        </span>
      </section>

      <section
        id="work-with-us"
        className="w-full flex justify-between bg-blue3"
      >
        <div
          id="container-fluid"
          className="flex flex-row-reverse items-center justify-between w-full"
        >
          <span id="img-container" className="">
            <img src={containerImg2} alt="" />
          </span>
          <span
            id="text-container"
            className="flex flex-col gap-6 px-40 text-white"
          >
            <h5 className="text-base font-bold tracking-[0.2px]">
              WORK WITH US{" "}
            </h5>
            <h1 className="text-5xl font-bold  tracking-[0.2px] w-3/4 ">
              Now Let’s grow Yours{" "}
            </h1>
            <h4 className="text-lg  w-4/6 font-normal tracking-[0.2px]">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th{" "}
            </h4>
            <span className="flex flex-row gap-2 items-center">
              <button className="p-3 flex border-solid border-[1px] bg-blue1 rounded-md w-40 justify-center  text-sm text-white font-bold tracking-normal">
                Button{" "}
              </button>
            </span>
          </span>
        </div>
      </section>
    </div>
  );
};
export default About;
