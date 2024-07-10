import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import Loading from "../Loading";
import { useDispatch, useSelector } from "react-redux";
import { loadingSetter } from "../../store/actions/globalAction";

const Payment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const baseURL = "https://workintech-fe-ecommerce.onrender.com";
  const instance = axios.create({ baseURL });
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const loading = useSelector((store) => store.global.loading);
  const onSubmit = (formData) => {
    dispatch(loadingSetter(true));
    const { security_code, ...dataWithoutSecurityCode } = formData;

    if (token) {
      instance
        .post("/user/card", dataWithoutSecurityCode, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          dispatch(loadingSetter(false));
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

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="bg-darkblue1 border rounded-xl text-white px-8 flex flex-col py-4 w-full">
        <style>
          {`@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);`}
        </style>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
            <div
              className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-black"
              style={{ maxWidth: "600px" }}
            >
              <div className="w-full pt-1 pb-5">
                <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                  <i className="mdi mdi-credit-card-outline text-3xl"></i>
                </div>
              </div>
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
                      className="form-radio h-5 w-5 text-indigo-500"
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
                      className="form-radio h-5 w-5 text-indigo-500"
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
                    type="text"
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
                  Security code
                </label>
                <div>
                  <input
                    {...register("security_code", {
                      required: true,
                      pattern: /^[0-9]{3,4}$/,
                    })}
                    className="w-32 px-3 py-2 mb-1 border-2 border-blue2 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="000"
                    type="text"
                  />
                  {errors.security_code && (
                    <span className="text-red-500">
                      This field is required and must be 3-4 digits
                    </span>
                  )}
                </div>
              </div>
              <div>
                <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                  <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default Payment;
