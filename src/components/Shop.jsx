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
import { Link, useLocation } from "react-router-dom";
import {
  activePageSetter,
  getProducts,
  getProductsByCategory,
  getProductsToFilter,
  getProductsToSort,
} from "../store/actions/productAction";
import Loading from "./Loading";
import { AddCart } from "../store/actions/shoppingCartAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RatingStars from "./RatingStars";

export const Shop = () => {
  const { boxData, shopData } = data();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();
  const categoriesData = useSelector((store) => store.global.categories);
  const productData = useSelector((store) => store.product.productList);
  const productCount = useSelector((store) => store.product.totalProductCount);
  const selectedCategory = useSelector(
    (store) => store.product.selectedCategory
  );
  const sortByRating = categoriesData.sort((a, b) => b.rating - a.rating);
  const productPerPage = useSelector((store) => store.product.productPerPage);
  const totalPages = Math.ceil(productData?.length / productPerPage);
  const activePage = useSelector((store) => store.product.activePage);
  const indexOfFirstProduct = (activePage - 1) * productPerPage;
  const indexOfLastProduct = indexOfFirstProduct + productPerPage;
  const onPageChange = (page) => {
    dispatch(activePageSetter(page));
  };

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      if (location.pathname === "/shop") {
        dispatch(getProducts());
      } else if (location.pathname.includes("category")) {
        if (selectedCategory) {
          dispatch(getProductsByCategory(selectedCategory));
        }
      }
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [dispatch, location.pathname, selectedCategory]);

  const handleSortChange = (sortParam) => {
    dispatch(getProductsToSort(sortParam));
  };

  const handleFilterChange = (filterParam) => {
    dispatch(getProductsToFilter(filterParam));
  };

  const handleProductClick = (productDataObject) => {
    dispatch({ type: "SET_PRODUCT_DATA_OBJECT", payload: productDataObject });
  };
  const categoryHandleClick = (categoryId) => {
    console.log("category id", categoryId);
    dispatch({ type: "SET_SELECTED_CATEGORY", payload: categoryId });
  };
  const addToCart = (product) => {
    dispatch(AddCart(product));
    toast.success(`Product has been successfully added in your cart!`);
  };

  if (loading) {
    return <Loading />;
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
              onClick={() => categoryHandleClick(box.id)}
              key={index}
              to={`/shop/category/${
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
          <p className="sm:text-base">Showing all {productCount} results</p>
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
                onChange={(e) => handleSortChange(e.target.value)}
                className="flex border border-gray rounded-lg py-4 px-4 w-full sm:text-base bg-lightgray"
              >
                <option>Popularity</option>
                <option value="price:asc">Price Ascending</option>
                <option value="price:desc">Price Descending</option>
                <option value="rating:asc">Rating Ascending</option>
                <option value="rating:desc">Rating Descending</option>
              </select>
            </label>
            <input
              type="text"
              className="max-w-[170px] bg-[#F9F9F9] border-[#DDDDDD] border rounded px-4"
              placeholder="Search"
              onChange={(e) => handleFilterChange(e.target.value)}
            />
            <button
              className="border border-gray rounded-lg py-3 px-5 bg-blue1 sm:text-base text-white"
              id="2"
            >
              Filter
            </button>
          </span>
        </span>
        <span className="flex flex-row flex-wrap gap-16 justify-between sm:w-full sm:flex-col sm:px-10 sm:gap-32 sm:py-4">
          {productData &&
            productData
              .slice(indexOfFirstProduct, indexOfLastProduct)
              .map((id, index) => (
                <div
                  key={index}
                  className="items-center justify-between flex flex-col gap-2 shadow-sm shadow-gray pb-16 w-1/4 sm:w-full max-w-[240px]"
                >
                  <Link
                    to={`/${id.category_id}/${id.id}/${id.name}`}
                    onClick={() => handleProductClick(id)}
                  >
                    <span id="product-img-content" className="sm:w-full">
                      <img
                        src={id.images[0].url}
                        alt=""
                        className="sm:w-full"
                      />
                    </span>
                    <span className="flex flex-col items-center gap-2 text-center ">
                      <h4 className="text-base sm:text-2xl font-bold leading-7 tracking-normal">
                        {id.name}
                      </h4>
                      <h5 className="text-sm sm:text-xl font-bold leading-7 tracking-wide text-[#737373]">
                        {id.description}
                      </h5>
                    </span>
                    <span className="flex flex-col sm:text-xl items-center text-center justify-center gap-4 py-4 text-base font-bold">
                      <h5 className="text-[#23856D]">{id.price} $</h5>
                      <RatingStars rating={id.rating} />
                    </span>
                    <span id="colors">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-red"></div>
                        <div className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-blue-500"></div>
                        <div className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-green"></div>
                        <div className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-yellow-500"></div>
                      </div>
                    </span>
                  </Link>
                  <span className="flex flex-row gap-4">
                    <button
                      onClick={() => addToCart(id)}
                      className="py-4 px-4 sm:py-8  sm:px-8  flex border-solid border-[1px] text-lightgray bg-darkblue1 rounded-md w-32 sm:w-48 justify-center text-base sm:text-xl font-bold  tracking-normal"
                    >
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
