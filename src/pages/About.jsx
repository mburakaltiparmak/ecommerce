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
import { data } from "../data";

const About = () => {
  const { memberData } = data();
  return (
    <div id="about" className="flex flex-col items-center font-Montserrat">
      <section
        id="about-us"
        className="w-full flex justify-between px-40 sm:px-10"
      >
        <div
          id="container-fluid"
          className="flex flex-row-reverse sm:flex-col-reverse items-center justify-between sm:justify-center  w-full"
        >
          <span id="img-container" className="">
            <img src={containerImg} alt="" />
          </span>
          <span
            id="text-container"
            className="flex flex-col gap-6   sm:items-center sm:text-center"
          >
            <h5 className="text-base text-darkblue1 font-bold tracking-[0.2px] sm:text-xl">
              ABOUT COMPANY
            </h5>
            <h1 className="text-5xl font-bold text-[#252B42] tracking-[0.2px] w-3/4 sm:w-full sm:text-6xl ">
              ABOUT US
            </h1>
            <h4 className="text-xl text-[#737373] w-3/5 font-normal tracking-[0.2px] sm:w-full sm:text-2xl">
              We know how large objects will act, but things on a small scale.
            </h4>
            <span className="flex flex-row gap-2 items-center">
              <button className="p-3 flex border-solid border-[1px] bg-blue1 rounded-md w-40 justify-center  text-sm sm:text-lg text-white font-bold tracking-normal">
                Get Quote Now
              </button>
            </span>
          </span>
        </div>
      </section>
      <section
        id="problems"
        className="flex flex-col gap-5 px-40 sm:text-center justify-between sm:justify-center w-full py-10 sm:px-10"
      >
        <span id="1" className="flex items-start sm:justify-center">
          <h5 className="text-red text-sm font-bold sm:text-xl">
            Problems trying
          </h5>
        </span>
        <span
          id="2"
          className="flex flex-row justify-between items-start sm:items-center sm:flex-col sm:gap-8"
        >
          <h3 className="text-darkblue1 font-bold text-base w-1/5 sm:w-full sm:text-xl  sm:items-center">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
          <p className="text-gray font-semibold text-sm w-2/5 sm:w-full sm:text-xl sm:text-center">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </span>
      </section>
      <section
        id="stats"
        className="section-class flex-row sm:flex-col text-center"
      >
        <span className="span-styles sm:w-full sm:items-center ">
          <h2 className="h2-styles sm:w-full sm:items-center sm:text-6xl">
            15K
          </h2>
          <p className="p-styles2 sm:w-full sm:text-2xl">Happy Customers</p>
        </span>
        <span className="span-styles sm:w-full sm:items-center">
          <h2 className="h2-styles sm:w-full sm:items-center sm:text-6xl">
            150K
          </h2>
          <p className="p-styles2 sm:w-full sm:items-center sm:text-2xl">
            Monthly Visitors
          </p>
        </span>
        <span className="span-styles sm:w-full sm:items-center">
          <h2 className="h2-styles sm:w-full sm:items-center sm:text-6xl">
            15
          </h2>
          <p className="p-styles2 sm:w-full sm:items-center sm:text-2xl">
            Countries Worldwide
          </p>
        </span>
        <span className="span-styles sm:w-full sm:items-center">
          <h2 className="h2-styles sm:w-full sm:items-center sm:text-6xl">
            100+
          </h2>
          <p className="p-styles2 sm:w-full sm:items-center sm:text-2xl">
            Top Partners
          </p>
        </span>
      </section>
      <section
        id="video"
        className="relative flex justify-center items-center w-full px-40 sm:px-10 "
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
          <h2 className="h2-styles sm:text-6xl">Meet Our Team</h2>
          <p className="p-styles w-3/5 sm:w-full sm:text-xl">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </span>
        <span
          id="team-span"
          className="flex flex-row sm:flex-col sm:gap-16 justify-between items-center w-full"
        >
          {memberData.slice(0, 3).map((member, index) => (
            <span key={index} id="member-box" className="team-span">
              <img src={member.img} />
              <h5 className="sm:text-lg">{member.username}</h5>
              <p className="p-styles sm:text-lg">{member.job}</p>
              <span id="social-media" className="social-media sm:text-2xl">
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
      <section
        id="companies"
        className="section-class flex-col bg-lightgray gap-10 sm:pt-40"
      >
        <span id="companies-text" className="flex flex-col items-center gap-5">
          <h2 className="h2-styles sm:w-full sm:text-6xl">
            Big Companies Are Here
          </h2>
          <p className="p-styles w-3/5 sm:w-full sm:text-xl">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </span>
        <span
          className="flex sm:flex-col sm:gap-8 items-center text-center justify-between w-full font-bold text-7xl text-gray"
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
          className="flex flex-row-reverse sm:flex-col-reverse sm:py-20 items-center justify-between w-full"
        >
          <span id="img-container" className="sm:hidden">
            <img src={containerImg2} className="object-cover" />
          </span>
          <span
            id="text-container"
            className="flex flex-col gap-6 px-40 sm:px-10 sm:items-center sm:text-center sm:gap-12 text-white"
          >
            <h5 className="text-base font-bold tracking-[0.2px] sm:text-2xl">
              WORK WITH US{" "}
            </h5>
            <h1 className="text-5xl font-bold  tracking-[0.2px] w-3/4 sm:w-full sm:text-6xl ">
              Now Let’s grow Yours{" "}
            </h1>
            <h4 className="text-lg  w-4/6 sm:w-full font-normal tracking-[0.2px] sm:text-xl">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th{" "}
            </h4>
            <span className="flex flex-row gap-2 items-center">
              <button className="p-3 sm:text-lg flex border-solid border-[1px] bg-blue1 sm:bg-blue3 rounded-md w-40 justify-center  text-sm text-white font-bold tracking-normal">
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
