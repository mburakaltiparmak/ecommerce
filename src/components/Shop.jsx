import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/actions/globalAction";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { activePageSetter, getProducts } from "../store/actions/productAction";
/* Responsive tasarım için bakman gereken yer product-container .*/
export const Shop = () => {
  const { boxData, shopData } = data();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const categoriesData = useSelector((store) => store.global.categories);
  const productData = useSelector((store) => store.product.productList);
  const productCount = useSelector((store) => store.product.totalProductCount);
  console.log("productData", productData);
  const sortByRating = categoriesData.sort((a, b) => b.rating - a.rating);
  //
  const productPerPage = useSelector((store) => store.product.productPerPage);
  const totalPages = Math.ceil(productData?.length / productPerPage);
  const activePage = useSelector((store) => store.product.activePage);

  const indexOfFirstProduct = (activePage - 1) * productPerPage;
  const indexOfLastProduct = indexOfFirstProduct + productPerPage;
  const onPageChange = (page) => {
    dispatch(activePageSetter(page));
  };
  console.log("index first", indexOfFirstProduct);
  console.log("index last", indexOfLastProduct);
  console.log("prod per page", productPerPage);
  console.log("total page", totalPages);
  //

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      dispatch(getCategories());
      dispatch(getProducts());

      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [dispatch]);

  if (loading) {
    return (
      <div className="relative">
        <div className="absolute bg-white bg-opacity-60 z-10 h-full w-full top-24 flex items-center justify-center">
          <div className="flex items-center">
            <span className="text-3xl mr-4 ">Loading</span>
            <svg
              className="animate-spin h-8 w-8 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-Montserrat flex flex-col gap-8 " id="shop-container">
      <section
        className="flex flex-col gap-12 bg-lightgray px-40 py-10 sm:py-10 sm:px-10 sm:w-full content-center "
        id="top-level"
      >
        <span className="flex flex-row justify-between items-center sm:flex-col sm:gap-8">
          <h2 className="text-xl sm:text-2xl font-bold text-darkblue1">Shop</h2>
          <span id="navbar">
            <Breadcrumb />
          </span>
        </span>

        <span
          className="flex flex-row justify-center gap-4 sm:flex-col sm:items-center"
          id="box-cards"
        >
          {sortByRating.slice(0, 5).map((box, index) => (
            <Link
              key={index}
              to={`/shop/${
                box.gender === "e" ? "erkek" : "kadin"
              }/${box.title.toLowerCase()}`}
            >
              <div
                id="container"
                className="relative shadow-lg sm:justify-center shadow-gray flex items-center sm:flex-col sm:w-fit  "
              >
                <img
                  className="object-cover w-[250px] h-[250px]"
                  src={box.img}
                />
                <button
                  id="center"
                  className="absolute t-1/2 w-full text-center text-lg sm:text-xl text-white font-bold"
                >
                  <p className="drop-shadow-4xl">{box.title}</p>
                  <p className="drop-shadow-4xl">Rating : {box.rating}</p>
                  <p className="drop-shadow-4xl">
                    {box.gender === "e" ? "Erkek" : "Kadın"}
                  </p>
                </button>
              </div>
            </Link>
          ))}
        </span>
      </section>

      <section
        className="flex flex-col justify-between items-center gap-12 px-40 sm:px-0"
        id="shop-section"
      >
        <span
          className="flex flex-row sm:flex-col sm:gap-4 justify-between items-center w-full font-bold text-sm  text-gray"
          id="filter-container"
        >
          <p className="sm:text-base">
            Showing all {productData && productData.length} results
          </p>
          <span
            id="views"
            className="flex flex-row gap-2 sm:gap-4 text-gray sm:items-center"
          >
            <p className="flex items-center sm:text-base">Views:</p>
            <button
              className="border border-gray rounded-lg p-3 text-base"
              id="1"
            >
              <img src={icon} className="w-4 h-4 object-cover" />
            </button>
            <button
              className="border border-gray rounded-lg text-base px-3 py-2"
              id="2"
            >
              <FontAwesomeIcon
                icon={faListUl}
                className="w-4 h-4 object-cover"
              />
            </button>
          </span>
          <span className="flex flex-row gap-2 sm:gap-4" id="filter-order">
            <label className="flex items-center justify-center" id="1">
              <select
                id="dropdown"
                defaultValue="Popularity"
                className="flex border border-gray rounded-lg py-4 px-4 w-full sm:text-base bg-lightgray"
              >
                <option>Popularity</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </label>
            <button
              className="border border-gray rounded-lg py-3 px-5 bg-blue1 sm:text-base text-white"
              id="2"
            >
              Filter
            </button>
          </span>
        </span>
        <span
          className="flex flex-row flex-wrap gap-16 justify-between sm:w-full sm:flex-col sm:px-10 sm:gap-32 sm:py-4"
          id="product-container"
        >
          {productData &&
            productData
              .slice(indexOfFirstProduct, indexOfLastProduct)
              .map((id, index) => (
                <div
                  className="items-center justify-between flex flex-col gap-2 border rounded-md shadow-lg shadow-gray pb-16 w-1/4 sm:w-full"
                  key={index}
                  id="product-content"
                >
                  <span id="product-img-content" className="sm:w-full">
                    <img
                      src={id.images[0].url}
                      alt=""
                      className="sm:w-full rounded-md"
                    />
                  </span>
                  <span
                    id="product-text"
                    className="flex flex-col items-center gap-2 text-center "
                  >
                    <h4 className="text-base sm:text-2xl font-bold leading-7 tracking-normal">
                      {id.name}
                    </h4>
                    <h5 className="text-sm sm:text-xl font-bold leading-7 tracking-wide text-[#737373]">
                      {id.description}
                    </h5>
                  </span>
                  {/*span içini flex-row yap */}
                  <span className="flex flex-col sm:text-xl items-center text-center justify-center gap-2 text-normal font-bold">
                    <h5 className="text-[#737373]">{id.price}</h5>
                    <h5 className="text-[#23856D]">{id.rating}</h5>
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
          <Pagination
            totalPages={totalPages}
            currentPage={activePage}
            onPageChange={onPageChange}
          />
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
