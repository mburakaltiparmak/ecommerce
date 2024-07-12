import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  IsChecked,
  clearCart,
  removeFromCart,
  updateCart,
} from "../store/actions/shoppingCartAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Summary from "../components/Summary";
import { setProducts } from "../store/actions/orderAction";

const Cart = () => {
  const dispatch = useDispatch();
  const [checkHandleState, setCheckHandleState] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  const cart = useSelector((store) => store.shoppingCart.cart);
  const cartLength = cart.length;
  console.log("cart", cart);

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

  const submitButtonHandler = () => {
    const newState = !checkHandleState;
    setCheckHandleState(newState);
    dispatch(IsChecked(newState));
  };

  const calculateShipping = () => {
    if (totalPrice.toFixed(2) > 150) {
      return -29.99;
    } else if (totalPrice.toFixed(2) == 0) {
      return 0;
    } else {
      return 29.99;
    }
  };

  const calculateTotal = () => {
    return (totalPrice + calculateShipping()).toFixed(2);
  };

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  return (
    <div
      id="cart-page"
      className="flex flex-row justify-between items-start px-40"
    >
      <div
        id="left"
        className="flex flex-col font-bold gap-2 items-start pb-5 "
      >
        <div>
          <span>My Cart </span>
          {`(${totalItemCount} Product${totalItemCount > 1 ? "s" : ""})`}
        </div>
        {cartLength > 0 ? (
          cart.map((item, index) => (
            <div
              id="cart-product"
              className="my-2 block drop-shadow-lg w-[400px] py-1 hover:text-black "
              key={index}
            >
              <div className="flex flex-row border border-gray rounded-lg">
                <img
                  src={item.product.images[0].url}
                  alt={item.product.id}
                  className="max-w-[150px] h-[200px] rounded-lg"
                />
                <div className="flex flex-col justify-around ml-2 ">
                  <div className="font-semibold text-lg">
                    {item.product.name}
                  </div>
                  <div className="font-light text-sm">
                    {item.product.description}
                  </div>
                  <div>
                    <span className="font-semibold text-green text-lg">{`$${
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
          ))
        ) : (
          <div id="empty-cart" className="flex flex-col items-center gap-4">
            <p className="text-red font-semibold text-lg">
              Your cart is empty. Please go to the Shopping page.
            </p>
            <Link
              to="/shop"
              className="bg-green px-2 py-2 rounded-md text-white font-semibold"
            >
              <button>Continue Shopping</button>
            </Link>
          </div>
        )}
        {cartLength > 0 && (
          <button
            className="flex items-center bg-red px-6 py-2 rounded-md text-white font-semibold gap-2"
            onClick={clearCartHandler}
          >
            Clear Products
            <FontAwesomeIcon icon={faTrash} />
          </button>
        )}
      </div>
      <div className="pt-4 drop-shadow-lg">
        <Summary />
      </div>
    </div>
  );
};

export default Cart;
