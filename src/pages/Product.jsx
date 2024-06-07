import React, { useEffect, useState } from "react";
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

import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Pagination } from "../components/Pagination";
import { activePageSetter } from "../store/actions/productAction";
import Loading from "../components/Loading";
import { AddCart } from "../store/actions/shoppingCartAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();
  const selectedCategory = useSelector(
    (store) => store.product.selectedCategory
  );
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      if (location.pathname === "/:category") {
        if (selectedCategory) {
          dispatch(getProductsToCategory(selectedCategory));
        }
      }
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [dispatch, location.pathname, selectedCategory]);

  const productDataObject = useSelector(
    (store) => store.product.productDataObject
  );
  const productData = useSelector((store) => store.product.productList);

  const sliderImages =
    productDataObject && productDataObject.images
      ? productDataObject.images
      : [];
  const productPerPage = useSelector((store) => store.product.productPerPage);
  const totalPages = Math.ceil(productData?.length / productPerPage);
  const activePage = useSelector((store) => store.product.activePage);

  const indexOfFirstProduct = (activePage - 1) * productPerPage;
  const indexOfLastProduct = indexOfFirstProduct + productPerPage;
  const onPageChange = (page) => {
    dispatch(activePageSetter(page));
  };

  const handleProductClick = (productDataObject) => {
    dispatch({ type: "SET_PRODUCT_DATA_OBJECT", payload: productDataObject });
  };
  const addToCart = (product) => {
    dispatch(AddCart(product));
    toast.success(`Product has been successfully added in your cart!`);
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="px-40 py-10 flex flex-col font-Montserrat font-bold gap-12 sm:px-10 sm:py-5">
      <section className="flex flex-row sm:items-center sm:justify-center">
        <Breadcrumb />
      </section>
      <section id="main-product" className="flex flex-row gap-12 sm:flex-col">
        <span id="slider" className="flex flex-col gap-4">
          <MiniSlider />
          <span className="flex flex-row items-start gap-4">
            {sliderImages.map((img, index) => (
              <button className="shadow-lg shadow-gray" key={index}>
                <img
                  className="w-[96px] h-[96px] object-contain"
                  src={img.url}
                  alt=""
                />
              </button>
            ))}
          </span>
        </span>
        <span
          id="explanation"
          className="flex flex-col gap-8 sm:gap-6 items-start"
        >
          <h4 className="h4-styles sm:text-xl">{productDataObject?.name}</h4>
          <RatingStars />
          <h3 className="h3-styles">{productDataObject?.price}₺</h3>
          <span className="flex flex-row sm:w-full gap-2 p-styles sm:text-base">
            <p className="flex flex-row">
              Availability :
              <span className={productDataObject ? "text-green" : "text-red"}>
                {productDataObject ? "Yes" : "No"}
              </span>
            </p>
            <p className="flex flex-row">
              In Stock :
              <span
                className={
                  productDataObject?.stock > 0 ? "text-green" : "text-red"
                }
              >
                {productDataObject?.stock}
              </span>
            </p>
          </span>
          <p className="p-styles w-4/5 sm:w-full sm:text-lg">
            {productDataObject?.description}
          </p>
          <hr className="w-4/5 sm:w-full" />
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
            <button className="round-button  hover:text-red hover:border-red">
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button
              className="round-button hover:text-green hover:border-green"
              onClick={() => addToCart(productDataObject)}
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
            <button className="round-button  hover:text-blue3 hover:border-blue3">
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
          className="flex flex-row gap-12 sm:gap-4 sm:items-center sm:w-full sm:text-base"
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
          <span
            className="shadow-lg shadow-gray rounded-md flex "
            id="description-img"
          >
            <img
              src={descriptionImg}
              alt=""
              className="sm:w-full object-cover"
            />
          </span>
          <span
            id="text-box-1"
            className="flex flex-col gap-4 w-1/3 items-start sm:w-full"
          >
            <h4 className="h4-styles sm:text-lg">the quick fox jumps over </h4>
            <p className="p-styles w-[90%] sm:w-full sm:text-base">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="p-styles w-[90%] sm:w-full sm:text-base">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="p-styles w-[90%] sm:w-full sm:text-base">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </span>
          <span id="text-box-2" className="flex flex-col gap-4">
            <span id="text-1" className="flex flex-col gap-4 ">
              <h4 className="h4-styles sm:text-lg">
                the quick fox jumps over{" "}
              </h4>
              <p className="p-styles w-full flex flex-row gap-2 items-center sm:text-base">
                <FontAwesomeIcon icon={faAngleRight} />
                the quick fox jumps over the lazy dog
              </p>
              <p className="p-styles w-full flex flex-row gap-2 items-center sm:text-base">
                <FontAwesomeIcon icon={faAngleRight} />
                the quick fox jumps over the lazy dog
              </p>
              <p className="p-styles w-full flex flex-row gap-2 items-center sm:text-base">
                <FontAwesomeIcon icon={faAngleRight} />
                the quick fox jumps over the lazy dog
              </p>
              <p className="p-styles w-full flex flex-row gap-2 items-center sm:text-base">
                <FontAwesomeIcon icon={faAngleRight} />
                the quick fox jumps over the lazy dog
              </p>
            </span>
            <span id="text-2" className="flex flex-col gap-4 sm:text-lg">
              <h3>the quick fox jumps over </h3>
              <p className="p-styles w-full flex flex-row gap-2 items-center sm:text-base">
                <FontAwesomeIcon icon={faAngleRight} />
                the quick fox jumps over the lazy dog
              </p>
              <p className="p-styles w-full flex flex-row gap-2 items-center sm:text-base">
                <FontAwesomeIcon icon={faAngleRight} />
                the quick fox jumps over the lazy dog
              </p>
              <p className="p-styles w-full flex flex-row gap-2 items-center sm:text-base">
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
          <h4 className="h4-styles sm:text-xl">BESTSELLER PRODUCTS</h4>
          <hr className="text-gray" />
        </span>
        {/*"flex justify-between flex-row flex-wrap gap-24 sm:w-full sm:flex-col sm:px-0 sm:gap-32 sm:py-16"*/}
        <span
          className="flex flex-row flex-wrap gap-16 justify-between sm:w-full sm:flex-col sm:px-10 sm:gap-32 sm:py-4"
          id="product-container"
        >
          {productData &&
            productData
              .slice(indexOfFirstProduct, indexOfLastProduct)
              .map((id, index) => (
                <div
                  className="items-center justify-between flex flex-col gap-2 shadow-sm shadow-gray pb-16 w-1/4 sm:w-full max-w-[240px]"
                  key={index}
                  id="product-content"
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
                  </Link>
                  <span id="button-span" className="flex flex-row gap-4">
                    <button
                      className="py-4 px-4 sm:py-8  sm:px-8  flex border-solid border-[1px] text-lightgray bg-darkblue1 rounded-md w-32 sm:w-48 justify-center text-base sm:text-xl font-bold  tracking-normal"
                      onClick={() => addToCart(id)}
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
