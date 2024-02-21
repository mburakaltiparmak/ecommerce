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
  const { boxData, productImgs } = data();
  const productData = productImgs.map((img, index) => ({
    id: index + 1,
    image: img,
    title: "Graphic Design",
    link: "English Department",
    price1: "$16.48",
    price2: "$6.48",
  }));
  const productCount = productData.length;

  return (
    <div className="font-montserrat flex flex-col gap-8 " id="shop-container">
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
              className="relative flex items-center"
            >
              <img className="w-full h-auto" src={box.img} />
              <button
                id="center"
                className="absolute t-1/2 w-full text-center text-base text-white font-bold"
              >
                <p>{box.title}</p>
                <p>{box.count} items</p>
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
          <p>Showing all {productCount} results</p>
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
          className="flex w-5/6 justify-center flex-row flex-wrap gap-4 px-12 sm:w-full sm:flex-col sm:px-10 sm:gap-16 sm:py-10"
          id="product-container"
        >
          {productData.map((product, index) => (
            <div
              key={index}
              id="product-card"
              className="flex flex-col items-center gap-4 py-8 "
            >
              <img
                src={product.image}
                alt={product.title}
                className="sm:w-full"
              />
              <h3 className="font-bold text-base text-darkblue1">
                {product.title}
              </h3>
              <p className="text-sm font-bold text-gray">{product.link}</p>
              <span id="prices" className="flex flex-row gap-4">
                <p className="text-sm font-bold text-gray">{product.price1}</p>
                <p className="text-sm font-bold text-green2">
                  {product.price2}
                </p>
              </span>
              <span id="colors">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-red"></div>
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="w-4 h-4 rounded-full bg-green"></div>
                  <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                </div>
              </span>
              <span id="button-span" className="flex flex-row gap-4">
                <button className="py-[4px] px-[4px] flex border-solid border-[1px] text-lightgray bg-darkblue1 rounded-md w-30 justify-center text-sm font-bold  tracking-normal">
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
