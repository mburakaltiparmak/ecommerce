import { data } from "../../data";
import menImg from "../../assets/shopcards/men.png";
import womenImg from "../../assets/shopcards/women.png";
import accessoriesImg from "../../assets/shopcards/accessories.png";
import kidsImg from "../../assets/shopcards/kids.png";
import womenImg2 from "../../assets/shopcards/women2.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Pagination } from "../Pagination";
import { useState } from "react";
import { activePageSetter } from "../../store/actions/productAction";
import { AddCart } from "../../store/actions/shoppingCartAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RatingStars from "../RatingStars";

export const ShopCards = () => {
  const dispatch = useDispatch();

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
  return (
    <div
      className="flex flex-col justify-center items-center gap-4 font-Montserrat w-full  "
      id="shop-container"
    >
      <div
        className="w-full flex flex-col gap-10 py-20 px-40 justify-center items-center "
        id="shop-main-container"
      >
        <div
          className="flex flex-col justify-center items-center text-center gap-2 px-10 sm:w-full "
          id="shop-text-container"
        >
          <h2
            className="text-darkblue1  font-bold text-2xl sm:text-3xl  tracking-tighter "
            id="h2-title"
          >
            EDITOR'S PICK
          </h2>
          <p className="text-gray text-xl font-bold text-center" id="paragraph">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div
          className="flex flex-row flex-wrap gap-3 content-center items-center font-Montserrat font-bold sm:px-10 "
          id="shop-img-container"
        >
          <Link
            to="/shop"
            className="relative flex items-end justify-start"
            id="first-img-box"
          >
            <img
              className="w-full h-auto object-cover"
              id="men-img"
              src={menImg}
              alt=""
            />
            <button className="absolute border border-gray w-40 py-2 mb-8 ml-8  text-center text-base sm:text-xl bg-lightgray">
              MEN
            </button>
          </Link>
          <span
            className="flex flex-row gap-3 items-center sm:flex-col sm:w-full"
            id="second-img-box"
          >
            <Link
              id="second-img-box1"
              className="relative flex items-end justify-start sm:items-end  sm:object-cover sm:w-full"
              to="/shop"
            >
              <img
                className="w-auto h-auto object-cover sm:h-full sm:w-full "
                id="women-img"
                src={womenImg2}
                alt=""
              />
              <button className="absolute border border-gray w-32 py-2 mb-8 ml-8  text-center text-base sm:text-xl bg-lightgray">
                WOMEN
              </button>
            </Link>
            <span
              className="flex flex-col gap-3 items-center sm:w-full"
              id="second-img-box2"
            >
              <Link
                className="relative flex items-end justify-start sm:w-full"
                to="/shop"
              >
                <img
                  className="w-full h-auto object-cover"
                  id="tiny-img"
                  src={accessoriesImg}
                  alt=""
                />
                <button className="absolute border border-gray w-36 sm:w-48 py-2 mb-8 ml-8  text-center text-base sm:text-xl bg-lightgray">
                  ACCESSORIES
                </button>
              </Link>
              <Link
                className="relative flex items-end justify-start sm:w-full"
                to="/shop"
              >
                <img
                  id="tiny-img"
                  src={kidsImg}
                  alt=""
                  className="sm:w-full object-cover"
                />
                <button className="absolute border border-gray w-28 py-2 mb-8 ml-8  text-center text-base sm:text-xl bg-lightgray">
                  KIDS
                </button>
              </Link>
            </span>
          </span>
        </div>
      </div>
      <div
        className="flex flex-col sm:w-full justify-center items-center w-full px-40 sm:px-10 "
        id="main-content"
      >
        <div
          className="flex flex-col justify-center items-center text-center gap-4 pb-12 px-10"
          id="shop-text-container"
        >
          <h2
            className="text-gray text-center leading-5 font-normal text-xl "
            id="h3-title"
          >
            Featured Products
          </h2>
          <p
            className="text-darkblue1 font-bold  text-2xl md:text-3xl"
            id="h2-title"
          >
            BESTSELLER PRODUCTS
          </p>
          <h3
            className="text-gray text-center  font-bold sm:text-xl"
            id="paragraph"
          >
            Problems trying to resolve the conflict between{" "}
          </h3>
        </div>
        <div
          className="flex flex-row flex-wrap gap-16 justify-center py-4 sm:w-full sm:flex-col sm:px-10 sm:gap-32 sm:py-4"
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
                        className="sm:w-full "
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
        </div>
        <div id="pagination" className="py-10 sm:py-10">
          <Pagination
            totalPages={totalPages}
            currentPage={activePage}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
};
