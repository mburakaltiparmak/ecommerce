import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "../components/Breadcrumb";
import MiniSlider from "../components/MiniSlider";
import RatingStars from "../components/RatingStars";
import { data } from "../data";

const Product = () => {
  const { miniSlider } = data();
  return (
    <div className="px-40 py-10 flex flex-col font-montserrat font-bold gap-8">
      <section className="flex flex-row">
        <Breadcrumb />
      </section>
      <section id="main-product" className="flex flex-row gap-12 items-center">
        <span id="slider" className="flex flex-col">
          <MiniSlider />
        </span>
        <span id="explanation" className="flex flex-col gap-8 items-start">
          <h4 className="h4-styles">Floating Phone</h4>
          <RatingStars />
          <h3 className="h3-styles">$1,139.33</h3>
          <span className="flex flex-row gap-2 p-styles">
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
      <section id="img-button">
        <span className="flex flex-row items-start gap-4">
          {miniSlider.map((img, index) => (
            <button className="" key={index}>
              <img className="w-[96px] h-[96px]" src={img} alt="" />
            </button>
          ))}
        </span>
      </section>
      <section id="information"></section>
      <section id="product-list"></section>
      <section id="logos"></section>
    </div>
  );
};
export default Product;
