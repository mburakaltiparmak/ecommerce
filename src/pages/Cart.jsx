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

const Cart = () => {
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

  useEffect(() => {
    console.log("cart :", cart);
  }, [cart]);

  return (
    <div id="cart-page" className="px-40">
      <div className="flex flex-row font-bold justify-between items-center py-5">
        <div>
          <span>My Cart </span>
          {`(${totalItemCount} Product${totalItemCount > 1 ? "s" : ""})`}
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
              className="w-[100px] h-[140px]"
            />
            <div className="flex flex-col justify-around ml-2">
              <div className="font-semibold">{item.product.name}</div>
              <div>
                <span className="font-semibold text-green text-sm">{`$${
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

      <div className="flex flex-row justify-between mx-auto mt-4">
        <Link
          className="bg-green px-6 py-2 rounded-md text-white font-semibold"
          to="/order"
        >
          Confirm Order
        </Link>
        <button
          className="flex items-center bg-red px-6 py-2 rounded-md text-white font-semibold gap-2"
          onClick={clearCartHandler}
        >
          Clear Products
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <div className="flex justify-end mt-4">
        <div className="text-lg font-semibold">
          Total Price:{" "}
          <span className="text-green">{`$${totalPrice.toFixed(2)}`}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
