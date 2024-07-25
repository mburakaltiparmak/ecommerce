import React, { useState } from "react";
import "react-credit-cards-2/dist/es/styles-compiled.css";
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
} from "@fortawesome/free-solid-svg-icons";
import { setCardNo } from "../../store/actions/orderAction";

const PaymentForm = ({ openAddCardPage }) => {
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

  const onSubmit = (formData) => {
    console.log("formData", formData);
    const saveCardData = {
      card_no: formData.card_no,
      expire_month: formData.expire_month,
      expire_year: formData.expire_year,
      name_on_card: formData.name_on_card,
    };

    const expiry = formData.expire_month + formData.expire_year;
    formData.expiry = expiry;

    dispatch(loadingSetter(true));
    const token = localStorage.getItem("token");
    const baseURL = "https://workintech-fe-ecommerce.onrender.com";
    const instance = axios.create({ baseURL });
    if (token) {
      instance
        .post("/user/card", saveCardData, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          dispatch(loadingSetter(false));
          dispatch(AddPayment(res.data));
          dispatch(getPaymentMethod());
          openAddCardPage();
          console.log("payment form response", res.data);
          toast.success("Your payment method successfully saved!");
        })
        .catch((err) => {
          console.error("Form post edilirken hata oluştu", err);
          dispatch(loadingSetter(false));
          toast.error("Form posting has been failed.");
        });
    } else {
      toast.info("Please login for this process!");
      history.push("/login");
    }
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <div className="flex flex-row items-start justify-between gap-4 font-Montserrat">
      {loading ? (
        <FontAwesomeIcon icon={faSpinner} spinPulse />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <div className="w-fit h-fit flex items-center justify-center ">
            <div
              className=" rounded-lg bg-blue2 border-4 border-darkblue1 shadow-lg p-4 text-darkblue1 font-semibold "
              
            >
              <Cards
          number={state.card_no}
          expiry={state.expiry}
          cvc={state.security_code}
          name={state.name_on_card}
          focused={state.focus}
        />
              <div className="w-full pt-1 pb-5"></div>
              <div className="mb-10">
                <h1 className="text-center font-bold text-xl uppercase">
                  Secure payment info
                </h1>
              </div>
              <div className="mb-3 flex -mx-2">
                <div className="px-2">
                  <label
                    htmlFor="type1"
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="radio"
                      className="form-radio h-5 w-5 text-darkblue1"
                      name="type"
                      id="type1"
                      defaultChecked
                    />
                    <img
                      src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                      className="h-8 ml-3"
                      alt="Visa"
                    />
                  </label>
                </div>
                <div className="px-2">
                  <label
                    htmlFor="type2"
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="radio"
                      className="form-radio h-5 w-5 text-darkblue1"
                      name="type"
                      id="type2"
                    />
                    <img
                      src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                      className="h-8 ml-3"
                      alt="PayPal"
                    />
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label className="font-bold text-sm mb-2 ml-1">
                  Name on card
                </label>
                <div>
                  <input
                    {...register("name_on_card", { required: true })}
                    className="w-full px-3 py-2 mb-1 border-2 border-blue2 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="John Smith"
                    type="text"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                  {errors.name_on_card && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label className="font-bold text-sm mb-2 ml-1">
                  Card number
                </label>
                <div>
                  <input
                    {...register("card_no", {
                      required: true,
                      pattern: /^[0-9]{16}$/,
                    })}
                    className="w-full px-3 py-2 mb-1 border-2 border-blue2 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="0000 0000 0000 0000"
                    type="number"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                  {errors.card_no && (
                    <span className="text-red-500">
                      This field is required and must be 16 digits
                    </span>
                  )}
                </div>
              </div>
              <div className="mb-3 -mx-2 flex items-end">
                <div className="px-2 w-1/2">
                  <label className="font-bold text-sm mb-2 ml-1">
                    Expiration date
                  </label>
                  <div>
                    <select
                      {...register("expire_month", { required: true })}
                      className="form-select w-full px-3 py-2 mb-1 border-2 border-blue2 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                    >
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                  </div>
                </div>
                <div className="px-2 w-1/2">
                  <select
                    {...register("expire_year", { required: true })}
                    className="form-select w-full px-3 py-2 mb-1 border-2 border-blue2 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  >
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                  </select>
                </div>
              </div>
              <div className="mb-10">
                <label className="font-bold text-sm mb-2 ml-1">
                  The security code will only be required during payment.
                </label>
                {/*
                 <div>
                  <input
                    {...register("security_code", {
                      required: true,
                      pattern: /^[0-9]{3,4}$/,
                    })}
                    className="w-32 px-3 py-2 mb-1 border-2 border-blue2 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="000"
                    type="text"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                  {errors.security_code && (
                    <span className="text-red-500">
                      This field is required and must be 3-4 digits
                    </span>
                  )}
                </div>*/}
              </div>
              <div className="flex flex-row items-center gap-2 justify-center">
                <button
                  type="submit"
                  className="bg-darkblue1 hover:bg-blue1 w-32 h-16 text-white rounded-lg  font-semibold"
                >
                 Save Card
                </button>
                <button
          onClick={openAddCardPage}
          className="border border-red text-white
 hover:text-red hover:border-red w-32 h-16 rounded-lg flex flex-row items-center justify-center gap-4 font-bold bg-red hover:bg-white shadow-md shadow-darkblue1"
        >

          Cancel
        </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
export default PaymentForm;
