import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  IsChecked,
  clearCart,
  removeFromCart,
  updateCart,
} from "../store/actions/shoppingCartAction";
const Summary = () => {
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

  useEffect(() => {
    console.log("cart :", cart);
  }, [cart]);
  return (
    <div className="flex flex-col font-bold justify-between items-center py-4 border border-x-2 border-y-2 border-darkblue1 drop-shadow-xl shadow-darkblue1 shadow-xl rounded-lg gap-4 max-h-[450px] bg-darkblue1 text-white">
      {cartLength > 0 ? (
        <Link
          className="bg-blue3 px-6 py-2 rounded-md text-white font-semibold"
          to="/order"
          onClick={submitButtonHandler}
        >
          <p className="drop-shadow-xl ">Confirm Order</p>
        </Link>
      ) : (
        <button
          className="bg-red px-6 py-2 rounded-md text-white font-semibold cursor-not-allowed"
          disabled
        >
          <p className="drop-shadow-xl">Confirm Order</p>
        </button>
      )}

      <div id="summary" className="flex flex-col gap-4 px-4 drop-shadow-xl">
        <span className="flex flex-row justify-between px-4 font-medium gap-2">
          <p className="drop-shadow-xl ">Order Summary</p>
          <p>{`${totalPrice.toFixed(2)}$`}</p>
        </span>
        <span className="flex flex-row justify-between px-4 font-medium gap-2">
          <p className="drop-shadow-xl">Shipping Total :</p>
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
        className="text-base font-medium flex flex-col items-center gap-2 drop-shadow-xl"
      >
        <p className="text-white font-bold text-sm ">
          If you have Promo Code, enter here
        </p>
        <input
          type="text"
          className=" text-center bg-[#F9F9F9] border-[#DDDDDD] border rounded-lg h-[50px] cursor-text "
          placeholder="Promo Code"
          value={promoCode}
          onChange={handlePromoCodeChange}
        />
      </div>
      {cartLength > 0 ? (
        <Link
          className="bg-blue3 px-6 py-2 rounded-md text-white font-semibold"
          to="/order"
          onClick={submitButtonHandler}
        >
          <p className="drop-shadow-xl ">Confirm Order</p>
        </Link>
      ) : (
        <button
          className="bg-red px-6 py-2 rounded-md text-white font-semibold cursor-not-allowed"
          disabled
        >
          Confirm Order
        </button>
      )}
    </div>
  );
};
export default Summary;
