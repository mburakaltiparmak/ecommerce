import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  clearCart,
  removeFromCart,
  updateCart,
} from "../store/actions/shoppingCartAction";

const CartDropdown = () => {
  const dispatch = useDispatch();

  const cart = useSelector((store) => store.shoppingCart.cart);
  const cartLength = cart.length;

  const totalItemCount = cart.reduce((total, item) => total + item.count, 0);

  const decrementProductCount = (item) => {
    if (item.count <= 1) {
      dispatch(removeFromCart(item.product.id));
    }
    dispatch(updateCart(item.product.id, item.count - 1));
  };
  const removeFromCartHandler = (item) => {
    dispatch(removeFromCart(item.product.id));
  };

  const incerementProductCount = (item) => {
    dispatch(updateCart(item.product.id, item.count + 1));
  };
  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    console.log("cart :", cart);
  }, [cart]);

  return (
    <div className="relative mx-auto flex items-center justify-center z-50 bg-gray">
      <div className="group cursor-pointer bg-gray">
        <div className="flex items-center justify-between  bg-white ">
          <a className="menu-hover flex">
            <FontAwesomeIcon icon={faCartShopping} />
            {cartLength > 0 && (
              <span className="ml-1 font-bold">{cartLength}</span>
            )}
          </a>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
        <div className="invisible absolute flex w-[350px] max-h-[350px] flex-col bg-white py-1 px-2 text-gray shadow-xl group-hover:visible right-0 overflow-auto md:-right-20 pt-4">
          <div className="flex flex-row font-bold justify-between items-center">
            <div>
              <span>My Cart </span>
              {`(${totalItemCount} Product)`}
            </div>
            <div>
              <FontAwesomeIcon
                onClick={() => clearCartHandler()}
                icon={faTrash}
              />
            </div>
          </div>
          {cart.map((item, index) => (
            <div
              className="my-2 block border-b border-gray-300 py-1  hover:text-black md:mx-2 "
              key={index}
            >
              <div className="flex flex-row">
                <img
                  src={item.product.images[0].url}
                  alt={item.product.id}
                  className="w-[100px] h-[140px] ml-2"
                />
                <div className="flex flex-col justify-around ml-2">
                  <div className="font-semibold">{item.product.name}</div>
                  <div>
                    <span className="font-semibold text-green text-sm">{`$${
                      item.product.price * item.count
                    }`}</span>
                  </div>
                  <div className="flex flex-row font-semibold items-center justify-between">
                    <div className="flex flex-row gap-2 font-semibold">
                      <button
                        className="bg-blue1 px-2 rounded-md text-white"
                        onClick={() => decrementProductCount(item)}
                      >
                        -
                      </button>
                      <span>{item.count}</span>
                      <button
                        className="bg-blue1 px-2 rounded-md text-white"
                        onClick={() => incerementProductCount(item)}
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => removeFromCartHandler(item)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-row justify-between mx-auto">
            <Link
              className="bg-blue1 px-6 py-2 rounded-md text-white font-semibold"
              to="/cart"
            >
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartDropdown;
