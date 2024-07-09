import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  IsChecked,
  clearCart,
  removeFromCart,
  updateCart,
} from "../store/actions/shoppingCartAction";
import { toast } from "react-toastify";

const Summary = () => {
  const dispatch = useDispatch();
  const [checkHandleState, setCheckHandleState] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const shipmentMethod = useSelector((store) => store.shoppingCart.shipment);

  const shipmentCost = () => {
    if (shipmentMethod === "standart") {
      return 29.99;
    } else if (shipmentMethod === "urgent") {
      return 50.00;
    } else if (shipmentMethod === "special") {
      return 75.00;
    } else {
      return 0;
    }
  }

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
    } else {
      dispatch(updateCart(item.product.id, item.count - 1));
      toast.info(`Product count has been successfully updated in your cart!`);
    }
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

  const calculateShipping = (shipmentCost) => {
    if (shipmentCost === 29.99 && totalPrice > 150) {
      return -29.99;
    } else if (totalPrice === 0) {
      return 0;
    } else {
      return shipmentCost;
    }
  };

  const calculateTotal = () => {
    const totalShipping = calculateShipping(shipmentCost());
    const total = totalPrice + totalShipping;
    return total;
  };

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  useEffect(() => {
    console.log("cart :", cart);
  }, [cart]);

  return (
    <div className="flex flex-col font-bold justify-between items-center py-4 border border-x-2 border-y-2 border-darkblue1 drop-shadow-xl shadow-darkblue1 shadow-xl rounded-lg gap-4 h-[400px] w-[400px] bg-darkblue1 text-white">
      <div id="summary" className="flex flex-col gap-4 px-4 drop-shadow-xl">
        <span className="flex flex-row justify-between px-4 font-medium gap-2">
          <p className="drop-shadow-xl">Order Summary</p>
          <p>{`${totalPrice.toFixed(2)}$`}</p>
        </span>
        <span className="flex flex-row justify-between px-4 font-medium gap-2">
          <p className="drop-shadow-xl">Shipping Total :</p>
          {shipmentCost().toFixed(2)}$
        </span>
        {shipmentCost() > 29.99 ? (<span className="flex flex-row justify-between text-center px-4 font-bold px-2">
          <p>Only Standart Shipping is free above 150$</p>
          </span>) : (
          <span className="flex flex-row justify-between px-4 font-medium gap-2">
            <p>Shipping is free above 150$ :</p>
            {calculateShipping(shipmentCost()) === 0 ? (
              <p>0.00$</p>
            ) : (
              <p>{calculateShipping(shipmentCost()).toFixed(2)}$</p>
            )}
          </span>
        )}
        <hr />
        <span className="flex flex-row justify-between px-4 font-medium gap-2">
          <p>Total</p>
          <p>{calculateTotal().toFixed(2)}$</p>
        </span>
      </div>
      <div
        id="promo-code-area"
        className="text-base font-medium flex flex-col items-center gap-2 drop-shadow-xl"
      >
        <p className="text-white font-bold text-sm text-center">
          If you have Promo Code, enter here
        </p>
        <input
          type="text"
          className="text-center bg-[#F9F9F9] border-[#DDDDDD] border rounded-lg h-[50px] cursor-text"
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
          <p className="drop-shadow-xl">Checkout</p>
        </Link>
      ) : (
        <button
          className="bg-red px-6 py-2 rounded-md text-white font-semibold cursor-not-allowed"
          disabled
        >
          <p className="drop-shadow-xl">Checkout</p>
        </button>
      )}
    </div>
  );
};

export default Summary;
