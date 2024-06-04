import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  IsChecked,
  clearCart,
  removeFromCart,
  updateCart,
} from "../store/actions/shoppingCartAction";

const Cart = () => {
  const dispatch = useDispatch();
  const [checkHandleState, setCheckHandleState] = useState(false);
  const [promoCode, setPromoCode] = useState("");

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
    }
    dispatch(updateCart(item.product.id, item.count - 1));
  };

  const removeFromCartHandler = (item) => {
    dispatch(removeFromCart(item.product.id));
  };

  const incrementProductCount = (item) => {
    dispatch(updateCart(item.product.id, item.count + 1));
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
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

  useEffect(() => {
    console.log("cart :", cart);
  }, [cart]);

  return (
    <div id="cart-page" className="flex flex-row justify-around px-40">
      <div
        id="left"
        className="flex flex-col font-bold justify-between items-start py-5 "
      >
        <div>
          <span>My Cart </span>
          {`(${totalItemCount} Product${totalItemCount > 1 ? "s" : ""})`}
        </div>
        {cartLength > 0 ? (
          cart.map((item, index) => (
            <div
              id="cart-product"
              className="my-2 block border border-black rounded-lg drop-shadow-lg w-[400px] py-1 hover:text-black"
              key={index}
            >
              <div className="flex flex-row ">
                <img
                  src={item.product.images[0].url}
                  alt={item.product.id}
                  className="w-[150px] h-[200px] "
                />
                <div className="flex flex-col justify-around ml-2">
                  <div className="font-semibold text-lg">
                    {item.product.name}
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
          <div className="flex flex-col items-center gap-4">
            <p className="text-red font-semibold text-lg">
              {" "}
              Your cart is empty. Please go to the Shopping page.{" "}
            </p>
            <Link
              to="/shop"
              className="bg-green px-2 py-2 rounded-md text-white font-semibold"
            >
              <button>Continue Shopping</button>
            </Link>
          </div>
        )}
        {cartLength > 0 ? (
          <button
            className="flex items-center bg-red px-6 py-2 rounded-md text-white font-semibold gap-2"
            onClick={clearCartHandler}
          >
            Clear Products
            <FontAwesomeIcon icon={faTrash} />
          </button>
        ) : (
          ""
        )}
      </div>
      <div
        id="right"
        className="flex flex-col font-bold justify-between items-center mt-12 py-4 border rounded-lg gap-4 max-h-[450px]"
      >
        <Link
          className="bg-green px-6 py-2 rounded-md text-white font-semibold"
          to="/order"
          onClick={submitButtonHandler}
        >
          Confirm Order
        </Link>
        <div id="summary" className="flex flex-col gap-4 px-4">
          <span className="flex flex-row justify-between px-4 font-medium gap-2">
            <p>Order Summary</p>
            <p>{`${totalPrice.toFixed(2)}$`}</p>
          </span>
          <span className="flex flex-row justify-between px-4 font-medium gap-2">
            <p>Shipping Total :</p>
            {totalPrice.toFixed(2) == 0 ? <p>0.00$</p> : <p>29.99$</p>}
          </span>
          <span className="flex flex-row justify-between px-4 font-medium gap-2">
            <p>Shipping is free above 150$ :</p>
            {calculateShipping() == 0 ? (
              <p>0.00$</p>
            ) : (
              <p>{calculateShipping()}$</p>
            )}
          </span>
          <hr />
          <span className="flex flex-row justify-between px-4 font-medium gap-2">
            <p>Total</p>
            <p>{calculateTotal()}$</p>
          </span>
        </div>
        <div
          id="promo-code-area"
          className="text-base font-medium flex flex-col items-center gap-2"
        >
          <p className="text-red">If you have Promo Code, enter here</p>
          <input
            type="text"
            className=" text-center bg-[#F9F9F9] border-[#DDDDDD] border rounded-lg h-[50px]"
            placeholder="Promo Code"
            value={promoCode}
            onChange={handlePromoCodeChange}
          />
        </div>
        <Link
          className="bg-green px-6 py-2 rounded-md text-white font-semibold"
          to="/order"
          onClick={submitButtonHandler}
        >
          Confirm Order
        </Link>
      </div>
    </div>
  );
};

export default Cart;
