import React, { useState } from "react";

import Cards from "react-credit-cards-2";
import { toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";
import Loading from "../Loading";
import { useDispatch, useSelector } from "react-redux";
import { loadingSetter } from "../../store/actions/globalAction";
import {
  AddPayment,
  getCurrentPayment,
  getPaymentMethod,
} from "../../store/actions/shoppingCartAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCirclePlus,
  faSquarePen,
  faTrashCan,
  faSpinner,
  faPlus,
  faCircleMinus,
  faCross,
  faCancel,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { setCardCCV, setCardNo } from "../../store/actions/orderAction";

const CCVForm = ({
  setModalOpen,
  setStep1,
  setStep2,
  setStep3,
  setStep4,
  setCurrentStep,
  modalOpen,
}) => {
  const [state, setState] = useState({
    card_no: "",
    expiry: "",
    security_code: "",
    name_on_card: "",
    focus: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.global.loading);
  dispatch(loadingSetter(false));
  const cardNo = useSelector((store) => store.order.card_no);
  const cardName = useSelector((store) => store.order.card_name);
  const cardExpireMonth = useSelector((store) => store.order.card_expire_month);
  const cardExpireYear = useSelector((store) => store.order.card_expire_year);

  const onSubmit = (formData) => {
    console.log("formData", formData);
    dispatch(setCardCCV(formData.security_code));
  };
  const handleCancelOrder = () => {
    setStep2(false);
    setStep3(false);
    setStep4(false);
    setCurrentStep(1);
    setModalOpen(false);
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };
  const expiry = `${cardExpireMonth} ${cardExpireYear}`;
  console.log("expiry", expiry);
  console.log("card expire month", cardExpireMonth);
  return (
    <div className="bg-darkblue1 border-2 border-darkblue1 drop-shadow-2xl shadow-2xl text-white font-Montserrat p-4 rounded-lg">
      {loading ? (
        <FontAwesomeIcon icon={faSpinner} spinPulse />
      ) : (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="font-semibold flex flex-col items-center gap-4">
              <Cards
                number={cardNo}
                expiry={expiry}
                cvc={state.security_code}
                name={cardName}
                focused={state.focus}
              />
              <div className="flex flex-col gap-4 items-center">
                <h1 className="font-bold text-xl uppercase">
                  selected cards' info
                </h1>
                <span className=" flex flex-col items-around gap-4">
                  <div className="flex flex-col gap-4 w-full">
                    <label className="font-bold text-sm">Name on card</label>
                    <div>
                      <input
                        className="p-2 w-full border-2 placeholder-darkblue1 border-blue2 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder={cardName}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 w-full">
                    <label className="font-bold text-sm">Card number</label>
                    <div>
                      <input
                        className="p-2 w-full placeholder-darkblue1 border-2 border-blue2 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder={cardNo}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-4 w-full">
                    <label className="font-bold text-sm">Expiration date</label>
                    <span className="flex flex-row justify-between gap-4 ">
                      <div>
                        <select className="text-darkblue1 p-2 border-2 border-blue2 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                          <option selected>{cardExpireMonth}</option>
                        </select>
                      </div>
                      <div>
                        <select className="p-2 border-2 border-blue2 text-darkblue1 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                          <option selected>{cardExpireYear}</option>
                        </select>
                      </div>
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-lg animate-blink">
                      Please enter the CVV number to confirm your order.
                    </label>
                    {
                      <div>
                        <input
                          {...register("security_code", {
                            required: true,
                            pattern: /^[0-9]{3,4}$/,
                          })}
                          className="p-2 w-full border-2 border-blue2 text-darkblue1 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                          placeholder="123"
                          type="text"
                          onChange={handleInputChange}
                          onFocus={handleInputFocus}
                        />
                        {errors.security_code && (
                          <span className="text-red">
                            This field is required and must be 3-4 digits
                          </span>
                        )}
                      </div>
                    }
                  </div>
                  <div className="flex flex-row justify-between ">
                    <button
                      type="submit"
                      className="border border-green text-white
 p-4 rounded-xl flex flex-row items-center gap-4 font-bold bg-green  shadow-md shadow-darkblue1"
                    >
                      <FontAwesomeIcon className="text-3xl " icon={faCheck} />
                      <p>Submit Order</p>
                    </button>
                    <button
                      onClick={() => handleCancelOrder()}
                      className="border border-red text-white
 hover:text-red hover:border-red p-4 rounded-xl flex flex-row items-center gap-4 font-bold bg-red hover:bg-white shadow-md shadow-darkblue1"
                    >
                      <FontAwesomeIcon className="text-3xl " icon={faCancel} />
                      <p className="">Cancel Order</p>
                    </button>
                  </div>
                </span>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
export default CCVForm;
