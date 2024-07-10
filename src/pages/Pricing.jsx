import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PricingPageBreadcrumb } from "../components/PricingPageBreadcrumb";
import SwitchButton from "../components/PricingPageSwitchButton";
import { faCircleCheck, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
  faHooli,
  faLyft,
  faPiedPiperHat,
  faStripe,
  faAws,
  faRedditAlien,
} from "@fortawesome/free-brands-svg-icons";

const Pricing = () => {
  return (
    <div id="pricing" className="main-class">
      <section id="title" className="section-class flex-col gap-8 sm:w-full">
        <h5 className="h5-styles sm:text-2xl">PRICING</h5>
        <h2 className="h2-styles sm:text-5xl">Simple Pricing</h2>
        <PricingPageBreadcrumb />
      </section>
      <section
        id="pricing-type"
        className="section-class flex-col gap-16 bg-lightgray"
      >
        <span
          id="text-span"
          className="flex flex-col gap-5 items-center text-center sm:gap-8"
        >
          <h3 className="h3-styles sm:text-5xl">Pricing</h3>
          <p className="p-styles w-1/2 sm:w-full sm:text-xl">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <span
            id="switch-button"
            className="flex flex-row gap-3 text-center items-center"
          >
            <h4 className="h4-styles">Monthly</h4>
            <SwitchButton />
            <h4 className="h4-styles">Yearly</h4>
            <button className="border border-blue2 bg-blue2 text-blue1 rounded-2xl text-sm py-1 px-2 ">
              Save 25%
            </button>
          </span>
        </span>
        <span
          id="box-span"
          className="flex flex-row sm:flex-col sm:gap-8 w-full items-end justify-center"
        >
          <span id="box-1" className="box-style">
            <h3 className="h3-styles sm:text-5xl">FREE</h3>
            <p className="p-styles w-[35%] sm:w-full sm:text-xl">
              Organize across all apps by hand
            </p>
            <span className="flex flex-row text-blue1 gap-2 items-center">
              <h3 className="text-3xl sm:text-5xl">0</h3>
              <span className="flex flex-col items-start gap-2">
                <h5 className="text-base sm:text-2xl">$</h5>
                <p className="sm:text-2xl">Per Month</p>
              </span>
            </span>
            <span
              id="tick-rows"
              className="flex flex-col gap-4 text-sm items-start"
            >
              <p className="sm:text-lg">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2DC071" }}
                />{" "}
                Unlimited product updates
              </p>
              <p className="sm:text-lg">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2DC071" }}
                />{" "}
                Unlimited product updates
              </p>
              <p className="sm:text-lg">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2DC071" }}
                />{" "}
                Unlimited product updates
              </p>
              <p className="sm:text-lg">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#737373" }}
                />{" "}
                1GB Cloud Storage
              </p>
              <p className="sm:text-lg">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#737373" }}
                />{" "}
                Email and community support
              </p>
              <button className="w-full border sm:text-xl border-darkblue1 rounded-md bg-darkblue1 text-white text-sm py-3">
                Try for free
              </button>
            </span>
          </span>
          <span id="box-2" className="box-style bg-darkblue1 text-white py-20">
            <h3 className="h3-styles text-white sm:text-5xl">STANDARD</h3>
            <p className="p-styles w-[35%] sm:w-full sm:text-xl text-white">
              Organize across all apps by hand
            </p>
            <span className="flex flex-row text-blue1 gap-2 items-center">
              <h3 className="text-3xl sm:text-5xl">9.99</h3>
              <span className="flex flex-col items-start gap-2">
                <h5 className="text-base sm:text-2xl">$</h5>
                <p className="sm:text-2xl">Per Month</p>
              </span>
            </span>
            <span
              id="tick-rows"
              className="flex sm:text-lg flex-col gap-4 text-sm items-start"
            >
              <p>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2DC071" }}
                />{" "}
                Unlimited product updates
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2DC071" }}
                />{" "}
                Unlimited product updates
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2DC071" }}
                />{" "}
                Unlimited product updates
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#737373" }}
                />{" "}
                1GB Cloud Storage
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#737373" }}
                />{" "}
                Email and community support
              </p>
              <button className="w-full sm:text-xl border border-blue1 rounded-md bg-blue1 text-white text-sm py-3">
                Try for free
              </button>
            </span>
          </span>
          <span id="box-3" className="box-style">
            <h3 className="h3-styles sm:text-5xl">PREMIUM</h3>
            <p className="p-styles w-[35%] sm:w-full sm:text-xl">
              Organize across all apps by hand
            </p>
            <span className="flex flex-row text-blue1 gap-2 items-center">
              <h3 className="text-3xl sm:text-5xl">19.99</h3>
              <span className="flex flex-col items-start gap-2">
                <h5 className="text-base sm:text-2xl">$</h5>
                <p className="sm:text-2xl">Per Month</p>
              </span>
            </span>
            <span
              id="tick-rows"
              className="flex sm:text-lg flex-col gap-4 text-sm items-start"
            >
              <p>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2DC071" }}
                />{" "}
                Unlimited product updates
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2DC071" }}
                />{" "}
                Unlimited product updates
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#2DC071" }}
                />{" "}
                Unlimited product updates
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#737373" }}
                />{" "}
                1GB Cloud Storage
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#737373" }}
                />{" "}
                Email and community support
              </p>
              <button className="w-full sm:text-xl border border-blue1 rounded-md bg-blue1 text-white text-sm py-3">
                Try for free
              </button>
            </span>
          </span>
        </span>
      </section>
      <section
        id="companies"
        className="section-class flex-col bg-lightgray gap-10"
      >
        <span id="companies-text" className="flex flex-col items-center gap-5">
          <p className="p-styles w-full text-base sm:text-lg">
            Trusted By Over 4000 Big Companies
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
        id="FAQ"
        className="flex items-center justify-between w-full flex-col gap-8 px-40 py-10 sm:px-10"
      >
        <span
          id="text-faq"
          className="flex flex-col gap-3 items-center justify-around sm:gap-8"
        >
          <h3 className="h3-styles font-bold text-4xl sm:text-5xl">
            Pricing FAQs
          </h3>
          <p className="p-styles w-1/2 sm:w-full sm:text-lg">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </span>
        <span
          id="questions"
          className="flex flex-row sm:flex-col sm:gap-8 sm:w-full sm:items-start justify-around items-center"
        >
          <span id="col-1" className="col-style gap-12 sm:w-full">
            <span className="flex flex-col gap-3 text-start">
              <span className="flex flex-row items-center gap-3">
                <FontAwesomeIcon icon={faAngleRight} className="text-blue1" />
                <p className="p-styles text-darkblue1 text-base w-full sm:text-lg ">
                  the quick fox jumps over the lazy dog
                </p>
              </span>

              <p className="text-sm text-gray font-semibold sm:text-base">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </span>
            <span className="flex flex-col gap-3 text-start">
              <span className="flex flex-row items-center gap-3">
                <FontAwesomeIcon icon={faAngleRight} className="text-blue1" />
                <p className="p-styles text-darkblue1 text-base w-full sm:text-lg">
                  the quick fox jumps over the lazy dog
                </p>
              </span>

              <p className="text-sm text-gray font-semibold sm:text-base">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </span>
            <span className="flex flex-col gap-3 text-start">
              <span className="flex flex-row items-center gap-3">
                <FontAwesomeIcon icon={faAngleRight} className="text-blue1" />
                <p className="p-styles text-darkblue1 text-base w-full sm:text-lg ">
                  the quick fox jumps over the lazy dog
                </p>
              </span>

              <p className="text-sm text-gray font-semibold sm:text-base">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </span>
          </span>
          <span id="col-2" className="col-style gap-12 sm:w-full">
            <span className="flex flex-col gap-3 text-start">
              <span className="flex flex-row items-center gap-3">
                <FontAwesomeIcon icon={faAngleRight} className="text-blue1" />
                <p className="p-styles text-darkblue1 text-base w-full sm:text-lg">
                  the quick fox jumps over the lazy dog
                </p>
              </span>

              <p className="text-sm text-gray font-semibold sm:text-base">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </span>
            <span className="flex flex-col gap-3 text-start">
              <span className="flex flex-row items-center gap-3">
                <FontAwesomeIcon icon={faAngleRight} className="text-blue1" />
                <p className="p-styles text-darkblue1 text-base w-full sm:text-lg ">
                  the quick fox jumps over the lazy dog
                </p>
              </span>

              <p className="text-sm text-gray font-semibold sm:text-base">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </span>
            <span className="flex flex-col gap-3 text-start">
              <span className="flex flex-row items-center gap-3">
                <FontAwesomeIcon icon={faAngleRight} className="text-blue1" />
                <p className="p-styles text-darkblue1 text-base w-full sm:text-lg ">
                  the quick fox jumps over the lazy dog
                </p>
              </span>

              <p className="text-sm text-gray font-semibold sm:text-base">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </span>
          </span>
        </span>
        <span className="sm:flex sm:items-center sm:justify-center sm:py-10">
          <h5 className="h5-styles sm:font-bold sm:w-full sm:text-xl">
            Haven’t got your answer? <p>Contact our support</p>
          </h5>
        </span>
      </section>
      <section id="trial" className="section-class flex-col gap-8">
        <h3 className="h3-styles sm:text-5xl">Start your 14 days free trial</h3>
        <p className="p-styles w-1/3 sm:w-full sm:text-lg">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="text-center border border-blue1 rounded-lg px-5 py-3 bg-blue1 text-white font-bold text-sm sm:text-lg">
          Try it free now
        </button>
        <span
          id="social-media"
          className="social-media text-2xl gap-8 sm:text-3xl"
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
      </section>
    </div>
  );
};
export default Pricing;
