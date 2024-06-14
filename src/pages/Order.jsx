import Stepper from "../components/Stepper";
import Summary from "../components/Summary";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import {
  IsChecked,
  clearCart,
  removeFromCart,
  updateCart,
} from "../store/actions/shoppingCartAction";
const Order = () => {
  const steps = {
    1: {
      title: "Customer Info",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suntfugit ratione dolor itaque aspernatur quod dignissimos, ducimus",
    },
    2: {
      title: "Payment",
      description:
        "You may pay your items with Credit/Bank Cards or Shopping Credit.",
    },
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const stepKeys = Object.keys(steps);
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

  return (
    <div className="flex flex-row px-40 gap-4">
      <div>
        <div id="stepper" className="border rounded-lg bg-darkblue1">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row ">
              {stepKeys.map((key, i) => {
                const step = steps[key];
                return (
                  <div
                    key={i}
                    className={`flex flex-row items-start border rounded-lg w-96 h-40 bg-white py-4  ${
                      currentStep === i + 1 ? "active" : ""
                    } ${i + 1 < currentStep || complete ? "complete" : ""}`}
                  >
                    <div className="p-6 max-h-12 flex items-center justify-center  hover:cursor-pointer text-blue1">
                      <span className="text-3xl font-bold">
                        {i + 1 < currentStep || complete ? (
                          <FontAwesomeIcon icon={faCircleCheck} size="lg" />
                        ) : (
                          i + 1
                        )}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2 px-4">
                      <h4 className="text-2xl font-semibold text-darkblue1">
                        {step.title}
                      </h4>
                      <hr />
                      <p className="text-sm font-medium text-gray">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div id="forms">
          <form action="">FORM HERE</form>
        </div>
        <div className="flex items-end justify-end">
          {!complete && (
            <button
              className="btn"
              onClick={() => {
                if (currentStep === stepKeys.length) {
                  setComplete(true);
                } else {
                  setCurrentStep((prev) => prev + 1);
                }
              }}
            >
              {currentStep === stepKeys.length ? "Finish" : "Next"}
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Summary />
      </div>
    </div>
  );
};
export default Order;
