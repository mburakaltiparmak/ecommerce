import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../data";
import {
  faHooli,
  faLyft,
  faPiedPiperHat,
  faStripe,
  faAws,
  faRedditAlien,
} from "@fortawesome/free-brands-svg-icons";
import { Breadcrumb } from "./Breadcrumb";

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
    <div
      className="font-montserrat py-10 flex flex-col gap-16"
      id="shop-container"
    >
      <section
        className="flex flex-col gap-12 bg-lightgray px-10 pt-6 pb-10 content-center"
        id="top-level"
      >
        <span className="flex flex-row justify-between items-center">
          <h2 className="text-xl font-bold text-darkblue1">Shop</h2>
          <span id="navbar">
            <Breadcrumb />
          </span>
        </span>
        <span className="flex flex-row justify-center gap-4" id="box-cards">
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
        className="flex flex-col justify-between items-center gap-16 px-10"
        id="shop-section"
      >
        <span
          className="flex flex-row justify-between w-full font-bold text-sm text-gray"
          id="filter-container"
        >
          <p>Showing all {productCount} results</p>
          <span id="views">
            <button id="1">buton1</button>
            <button id="2">buton2</button>
          </span>
          <span id="filter-order">
            <button id="1">order</button>
            <button id="2">filter</button>
          </span>
        </span>
        <span
          className="flex w-4/5 justify-center flex-row flex-wrap gap-4"
          id="product-container"
        >
          {productData.map((product, index) => (
            <div
              key={index}
              id="product-card"
              className="flex flex-col items-center gap-4 py-8"
            >
              <img src={product.image} alt={product.title} />
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
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
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
        <span id="pagination">
          <button>1234</button>
        </span>
      </section>
      <section
        className="px-10 py-10 bg-lightgray flex flex-row justify-evenly content-center text-7xl text-gray"
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
