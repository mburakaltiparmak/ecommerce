import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../data";
import icon from "../assets/icon.png";
import {
  faHooli,
  faLyft,
  faPiedPiperHat,
  faStripe,
  faAws,
  faRedditAlien,
} from "@fortawesome/free-brands-svg-icons";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "./Breadcrumb";

import { Pagination } from "./Pagination";

/* Responsive tasarım için bakman gereken yer product-container */
export const Shop = () => {
  const { boxData, shopData } = data();

  return (
    <div className="font-Montserrat flex flex-col gap-8 " id="shop-container">
      <section
        className="flex flex-col gap-12 bg-lightgray px-40 py-10 sm:py-10 sm:px-10 sm:w-full content-center"
        id="top-level"
      >
        <span className="flex flex-row justify-between items-center sm:flex-col sm:gap-8">
          <h2 className="text-xl font-bold text-darkblue1">Shop</h2>
          <span id="navbar">
            <Breadcrumb />
          </span>
        </span>
        <span
          className="flex flex-row justify-center gap-4 sm:flex-col"
          id="box-cards"
        >
          {boxData.map((box, index) => (
            <div
              key={index}
              id="container"
              className="relative shadow-lg shadow-gray flex items-center"
            >
              <img className="w-full h-auto" src={box.img} />
              <button
                id="center"
                className="absolute t-1/2 w-full text-center text-lg sm:text-xl text-white font-bold"
              >
                <p className="drop-shadow-lg">{box.title}</p>
                <p className="drop-shadow-lg">{box.count} items</p>
              </button>
            </div>
          ))}
        </span>
      </section>

      <section
        className="flex flex-col justify-between items-center gap-12 px-40 sm:px-0"
        id="shop-section"
      >
        <span
          className="flex flex-row sm:flex-col sm:gap-4 justify-between items-center w-full font-bold text-sm text-gray"
          id="filter-container"
        >
          <p>Showing all {shopData.length} results</p>
          <span
            id="views"
            className="flex flex-row gap-2 sm:gap-4 text-gray sm:items-center"
          >
            <p className="flex items-center">Views:</p>
            <button className="border border-gray rounded-lg p-3" id="1">
              <img src={icon} className="w-[16px] h-[16px]" />
            </button>
            <button className="border border-gray rounded-lg p-3" id="2">
              <FontAwesomeIcon icon={faListUl} className="w-[16px] h-[16px]" />
            </button>
          </span>
          <span className="flex flex-row gap-2 sm:gap-4" id="filter-order">
            <label className="flex items-center justify-center" id="1">
              <select
                id="dropdown"
                defaultValue="Popularity"
                className="flex border border-gray rounded-lg py-4 px-4 w-full bg-lightgray"
              >
                <option>Popularity</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </label>
            <button
              className="border border-gray rounded-lg py-3 px-5 bg-blue1 text-white"
              id="2"
            >
              Filter
            </button>
          </span>
        </span>
        <span
          className="flex w-full justify-between flex-row flex-wrap gap-32 sm:w-full sm:flex-col sm:px-10 sm:gap-32 sm:py-4"
          id="product-container"
        >
          {shopData.map((id, index) => (
            <div className="shop" key={index} id="product-content">
              <span id="product-img-content" className="sm:w-full">
                <img src={id.img} alt="" className="sm:w-full rounded-md" />
              </span>

              <h4 className="text-base sm:text-2xl font-bold leading-7 tracking-normal">
                {id.title}
              </h4>
              <h5 className="text-sm sm:text-xl font-bold leading-7 tracking-wide text-[#737373]">
                {id.link}
              </h5>
              <span className="flex flex-row sm:text-xl items-center text-center justify-center gap-2 text-normal font-bold">
                <h5 className="text-[#737373]">{id.price1}</h5>
                <h5 className="text-[#23856D]">{id.price2}</h5>
              </span>
              <span id="colors">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-red"></div>
                  <div className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-blue-500"></div>
                  <div className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-green"></div>
                  <div className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-yellow-500"></div>
                </div>
              </span>
              <span id="button-span" className="flex flex-row gap-4">
                <button className="py-4 px-4 sm:py-8  sm:px-8  flex border-solid border-[1px] text-lightgray bg-darkblue1 rounded-md w-32 sm:w-48 justify-center text-base sm:text-xl font-bold  tracking-normal">
                  Add to Cart
                </button>
              </span>
            </div>
          ))}
        </span>
        <span id="pagination" className="sm:py-10">
          <Pagination />
        </span>
      </section>
      <section
        className="px-40 sm:px-10 py-10 bg-lightgray flex flex-row sm:flex-col sm:gap-8 justify-between content-center text-7xl text-gray"
        id="logo-section"
      >
        <FontAwesomeIcon icon={faHooli} />
        <FontAwesomeIcon icon={faLyft} />
        <FontAwesomeIcon icon={faPiedPiperHat} />
        <FontAwesomeIcon icon={faStripe} />
        <FontAwesomeIcon icon={faAws} />
        <FontAwesomeIcon icon={faRedditAlien} />
      </section>
    </div>
  );
};
