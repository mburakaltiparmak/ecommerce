import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faEye,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHooli,
  faLyft,
  faPiedPiperHat,
  faStripe,
  faAws,
  faRedditAlien,
} from "@fortawesome/free-brands-svg-icons";
import Breadcrumb from "../components/Breadcrumb";
import MiniSlider from "../components/MiniSlider";
import RatingStars from "../components/RatingStars";
import descriptionImg from "../assets/product/productImg3.png";
import { data } from "../data";

const Product = () => {
  const { miniSlider, productText, productContainerImgs } = data();
  return (
    <div className="px-40 py-10 flex flex-col font-montserrat font-bold gap-12 sm:px-10 sm:py-5">
      <section className="flex flex-row sm:items-center sm:justify-center">
        <Breadcrumb />
      </section>
      <section id="main-product" className="flex flex-row gap-12 sm:flex-col">
        <span id="slider" className="flex flex-col gap-4">
          <MiniSlider />
          <span className="flex flex-row items-start gap-4">
            {miniSlider.map((img, index) => (
              <button className="" key={index}>
                <img className="w-[96px] h-[96px]" src={img} alt="" />
              </button>
            ))}
          </span>
        </span>
        <span
          id="explanation"
          className="flex flex-col gap-8 sm:gap-6 items-start"
        >
          <h4 className="h4-styles">Floating Phone</h4>
          <RatingStars />
          <h3 className="h3-styles">$1,139.33</h3>
          <span className="flex flex-row sm:w-full gap-2 p-styles">
            <p>Availability :</p>
            <p>In Stock </p>
          </span>
          <p className="p-styles w-4/5">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <hr className="w-4/5" />
          <span id="colors">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-red"></div>
              <div className="w-8 h-8 rounded-full bg-blue-500"></div>
              <div className="w-8 h-8 rounded-full bg-green"></div>
              <div className="w-8 h-8 rounded-full bg-yellow-500"></div>
            </div>
          </span>
          <span id="buttons" className="flex flex-row gap-2">
            <button className="border border-blue1 rounded-lg bg-blue1 text-white p-2 text-sm">
              Select Options
            </button>
            <button className="round-button">
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className="round-button">
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
            <button className="round-button">
              <FontAwesomeIcon icon={faEye} />
            </button>
          </span>
        </span>
      </section>

      <section
        id="information"
        className="flex flex-col justify-center items-center gap-12 sm:gap:8"
      >
        <span
          id="description-bar"
          className="flex flex-row gap-12 sm:gap-4 sm:items-center sm:w-full sm:text-sm"
        >
          <button>Description</button>
          <button>Additional Information</button>
          <button className="flex flex-row gap-1">
            Reviews <p>(0)</p>
          </button>
        </span>
        <hr className="w-full text-gray sm:hidden" />
        <span
          id="product-description"
          className="flex flex-row justify-between sm:flex-col sm:gap-8"
        >
          <span id="description-img">
            <img src={descriptionImg} alt="" />
          </span>
          <span
            id="text-box-1"
            className="flex flex-col gap-4 w-1/3 items-start sm:w-full"
          >
            <h4 className="h4-styles">the quick fox jumps over </h4>
            <p className="p-styles w-[90%] sm:w-full">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="p-styles w-[90%] sm:w-full">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="p-styles w-[90%] sm:w-full">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </span>
          <span id="text-box-2" className="flex flex-col gap-4">
            <span id="text-1" className="flex flex-col gap-4">
              <h4 className="h4-styles">the quick fox jumps over </h4>
              <p className="p-styles w-full flex flex-row gap-2 items-center">
                <FontAwesomeIcon icon={faAngleRight} />
                the quick fox jumps over the lazy dog
              </p>
              <p className="p-styles w-full flex flex-row gap-2 items-center">
                <FontAwesomeIcon icon={faAngleRight} />
                the quick fox jumps over the lazy dog
              </p>
              <p className="p-styles w-full flex flex-row gap-2 items-center">
                <FontAwesomeIcon icon={faAngleRight} />
                the quick fox jumps over the lazy dog
              </p>
              <p className="p-styles w-full flex flex-row gap-2 items-center">
                <FontAwesomeIcon icon={faAngleRight} />
                the quick fox jumps over the lazy dog
              </p>
            </span>
            <span id="text-2" className="flex flex-col gap-4">
              <h3>the quick fox jumps over </h3>
              <p className="p-styles w-full flex flex-row gap-2 items-center">
                <FontAwesomeIcon icon={faAngleRight} />
                the quick fox jumps over the lazy dog
              </p>
              <p className="p-styles w-full flex flex-row gap-2 items-center">
                <FontAwesomeIcon icon={faAngleRight} />
                the quick fox jumps over the lazy dog
              </p>
              <p className="p-styles w-full flex flex-row gap-2 items-center">
                <FontAwesomeIcon icon={faAngleRight} />
                the quick fox jumps over the lazy dog
              </p>
            </span>
          </span>
        </span>
      </section>
      <section
        id="product-list"
        className="flex flex-col gap-8 pb-12 items-center"
      >
        <span className="flex flex-col gap-4 w-full">
          <h4 className="h4-styles">BESTSELLER PRODUCTS</h4>
          <hr className="text-gray" />
        </span>

        <span
          id="product-container"
          className="flex flex-row flex-wrap justify-center w-3/4 items-center gap-8"
        >
          {productContainerImgs.map((item, index) => (
            <span key={index} id="product" className="flex flex-col gap-4">
              <img src={item} alt="" />

              <span key={index} className="flex flex-col gap-2 text-start pl-4">
                <h4 className="h4-styles">{productText.title}</h4>
                <h5 className="h5-styles">{productText.link}</h5>
                <span className="flex flex-row gap-2 p-styles">
                  <p className="text-gray">{productText.price1}</p>
                  <p className="text-green2">{productText.price1}</p>
                </span>
              </span>
            </span>
          ))}
        </span>
      </section>
      <section id="companies">
        <span
          className="flex items-center text-center justify-between w-full font-bold text-7xl text-gray sm:flex-col sm:gap-8"
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
    </div>
  );
};
export default Product;
