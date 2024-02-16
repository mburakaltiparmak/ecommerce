import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/*import {
 
  } from "@fortawesome/free-solid-svg-icons";*/
/*import {
    
  } from "@fortawesome/free-brands-svg-icons";*/
import boxImg1 from "../assets/productlistpage/shop/1.png";
import boxImg2 from "../assets/productlistpage/shop/2.png";
import boxImg3 from "../assets/productlistpage/shop/3.png";
import boxImg4 from "../assets/productlistpage/shop/4.png";
import boxImg5 from "../assets/productlistpage/shop/5.png";
import productImg1 from "../assets/productlistpage/products/1.png";
import productImg2 from "../assets/productlistpage/products/2.png";
import productImg3 from "../assets/productlistpage/products/3.png";
import productImg4 from "../assets/productlistpage/products/4.png";
import productImg5 from "../assets/productlistpage/products/5.png";
import productImg6 from "../assets/productlistpage/products/6.png";
import productImg7 from "../assets/productlistpage/products/7.png";
import productImg8 from "../assets/productlistpage/products/8.png";
import productImg9 from "../assets/productlistpage/products/9.png";
import productImg10 from "../assets/productlistpage/products/10.png";
import productImg11 from "../assets/productlistpage/products/11.png";
import productImg12 from "../assets/productlistpage/products/12.png";

export const Shop = () => {
  const boxData = [
    {
      img: boxImg1,
      title: "CLOTHS",
      count: 5,
    },
    {
      img: boxImg2,
      title: "CLOTHS",
      count: 5,
    },
    {
      img: boxImg3,
      title: "CLOTHS",
      count: 5,
    },
    {
      img: boxImg4,
      title: "CLOTHS",
      count: 5,
    },
    {
      img: boxImg5,
      title: "CLOTHS",
      count: 5,
    },
  ];
  const productData = [
    {
      img: productImg1,
      title: "Graphic Design",
      link: "English Department",
      price1: "$16.48",
      price2: "$6.48",
    },
  ];
  return (
    <div id="shop-container">
      <section id="top-level">
        <h2>Shop</h2>
        <span id="navbar"></span>
      </section>
      <section id="shop-cards">
        <label id="clothe-card" htmlFor="clothes">
          <span className="relative">
            <img src="" alt="" />
            <span className="absolute"></span>
          </span>
        </label>
      </section>
      <section>
        <span id="filter-container">
          <p>Showing all 12 results</p>
          <span id="views"></span>
          <span id="filter-order"></span>
        </span>
        <span id="product-container"></span>
        <span id="pagination"></span>
      </section>
      <section id="logo-section"></section>
    </div>
  );
};
