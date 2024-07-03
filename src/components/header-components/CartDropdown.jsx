import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  clearCart,
  removeFromCart,
  updateCart,
} from "../../store/actions/shoppingCartAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartDropdown = () => {
  const dispatch = useDispatch();

  const cart = useSelector((store) => store.shoppingCart.cart);
  const cartLength = cart.length;

  const totalItemCount = cart.reduce((total, item) => total + item.count, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.count,
    0
  );

  const decrementProductCount = (item) => {
    if (item.count <= 1) {
      dispatch(removeFromCart(item.product.id));
      toast.info(`Product has been successfully removed from your cart!`);
    }
    dispatch(updateCart(item.product.id, item.count - 1));
    toast.info(`Product count has been successfully updated in your cart!`);
  };
  const removeFromCartHandler = (item) => {
    dispatch(removeFromCart(item.product.id));
    toast.info(`Product has been successfully removed from your cart!`);
  };

  const incrementProductCount = (item) => {
    dispatch(updateCart(item.product.id, item.count + 1));
    toast.info(`Product count has been successfully updated in your cart!`);
  };
  const clearCartHandler = () => {
    dispatch(clearCart());
    toast.info(`Your cart has been successfully cleared!`);
  };

  useEffect(() => {
    console.log("cart :", cart);
  }, [cart]);

  return (
    <div className="relative mx-auto flex items-center justify-center z-50  ">
      <div className="group cursor-pointer bg-white">
        <div className="flex items-center justify-between bg-white ">
          <a className="menu-hover flex items-center">
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
        <div className="invisible absolute flex w-[350px] max-h-[350px] flex-col bg-white py-1 px-2 text-gray shadow-xl group-hover:visible right-0 overflow-auto md:-right-20 pt-4 rounded-lg">
          <div className="flex flex-row font-bold justify-between items-center">
            <div>
              <span>My Cart </span>
              {`(${totalItemCount} Product)`}
            </div>
            <div>
              <FontAwesomeIcon
                className="hover:text-red"
                onClick={() => clearCartHandler()}
                icon={faTrash}
              />
            </div>
          </div>
          {cart.map((item, index) => (
            <div
              id="cart-product"
              className="my-2 block border-b border-gray py-1 hover:text-black"
              key={index}
            >
              <div className="flex flex-row">
                <img
                  src={item.product.images[0].url}
                  alt={item.product.id}
                  className="w-[100px] h-[150px]"
                />
                <div className="flex flex-col justify-around items-start px-2">
                  <div className="font-semibold text-lg ">
                    {item.product.name}
                  </div>
                  <div>
                    <span className="font-semibold text-green text-lg flex items-start">{`$${
                      item.product.price * item.count
                    }`}</span>
                  </div>
                  <div className="flex flex-row font-semibold items-center justify-start gap-4">
                    <div className="flex flex-row gap-2 font-semibold items-center justify-center">
                      <button
                        className="bg-blue1 p-2 rounded-lg text-white flex items-center"
                        onClick={() => decrementProductCount(item)}
                      >
                        <p className="px-1">-</p>
                      </button>
                      <span>{item.count}</span>
                      <button
                        className="bg-blue1 p-2 rounded-lg text-white flex items-center"
                        onClick={() => incrementProductCount(item)}
                      >
                        <p className="px-1">+</p>
                      </button>
                    </div>
                    <button>
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => removeFromCartHandler(item)}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-row justify-between items-center">
            <Link
              className="bg-blue1 px-6 py-2 rounded-md text-white font-semibold"
              to="/cart"
            >
              Go to Cart
            </Link>
            <div className="flex bg-white justify-end  items-center">
              <div className="text-lg font-semibold bg-white">
                Total Price:{" "}
                <span className="text-green">{`$${totalPrice.toFixed(
                  2
                )}`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartDropdown;
