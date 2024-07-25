import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Cards from "react-credit-cards-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCirclePlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import PaymentForm from "./PaymentForm";
import {
  getCurrentPayment,
  getPaymentMethod,
  removePayment,
} from "../../store/actions/shoppingCartAction";
import {
  setCardCCV,
  setCardExpireMonth,
  setCardExpireYear,
  setCardName,
  setCardNo,
} from "../../store/actions/orderAction";

const Payment = ({
  step3,
  setStep3,
  setCurrentStep,
  setModalOpen,
  modalOpen,
  currentStep,
}) => {
  const token = localStorage.getItem("token");
  const baseURL = "https://workintech-fe-ecommerce.onrender.com";
  const instance = axios.create({ baseURL });
  const dispatch = useDispatch();
  const paymentMethods = useSelector(
    (store) => store.shoppingCart.currentPayment
  );
  const [cardPage, setCardPage] = useState(false);

  useEffect(() => {
    dispatch(getPaymentMethod());
  }, [dispatch]);

  const openAddCardPage = () => {
    setCardPage(!cardPage);
  };

  const handleDeleteCard = (id) => {
    instance
      .delete(`/user/card/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        dispatch(removePayment(id));
      })
      .catch((err) => {
        console.error("Card deletion failed", err);
      });
  };

  const handleSelectCard = (card) => {
    dispatch(setCardNo(card.card_no));
    dispatch(setCardName(card.name_on_card));
    dispatch(setCardExpireMonth(card.expire_month));
    dispatch(setCardExpireYear(card.expire_year));
    setStep3(true);
    setModalOpen(!modalOpen);
    setCurrentStep(4);
  };

  return (
    <div className="bg-darkblue1 md:bg-blue1 border rounded-xl md:rounded-none flex flex-row items-center justify-center font-Montserrat font-bold text-2xl ">
      {cardPage ? (
        <span className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <PaymentForm openAddCardPage={openAddCardPage} />
        </span>
      ) : (
        <div>
          {paymentMethods.length > 0 ? (
            <div className="flex flex-col items-center flex-wrap gap-4 py-4">
              <h2 className="text-white">Your Cards</h2>
              {paymentMethods.map((card, index) => (
                <span
                  className="flex flex-col justify-between bg-darkblue1 items-center gap-2 border-2 border-white rounded-xl p-2"
                  key={index}
                >
                  <span className="text-white py-2">Card Id : {card.id}</span>
                  <span className="flex flex-row md:flex-col items-center justify-between gap-2 md:gap-4">
                    <Cards
                      number={card.card_no}
                      expiry=""
                      cvc=""
                      name={card.name_on_card}
                      focused=""
                    />
                    <span className="flex flex-col md:flex-row justify-center items-center gap-4">
                      <button
                        onClick={() => handleSelectCard(card)}
                        className="border p-4 rounded-xl flex flex-row items-center gap-4 font-bold bg-blue1  hover:bg-green shadow-md shadow-darkblue1"
                      >
                        <FontAwesomeIcon
                          className="text-4xl text-white"
                          icon={faCircleCheck}
                        />
                        <p className="text-white">Select</p>
                      </button>
                      <button
                        onClick={() => handleDeleteCard(card.id)}
                        className="border p-4 rounded-xl flex flex-row items-center gap-4 font-bold bg-blue1 md:bg-red hover:bg-green shadow-md shadow-darkblue1"
                      >
                        <FontAwesomeIcon
                          className="text-4xl text-white"
                          icon={faTrashCan}
                        />
                        <p className="text-white">Delete</p>
                      </button>
                    </span>
                  </span>
                </span>
              ))}
              <button
                onClick={openAddCardPage}
                className="border p-4 my-2 rounded-xl flex flex-row items-center gap-4 font-bold bg-blue1 md:bg-darkblue1  hover:bg-green shadow-md shadow-darkblue1"
              >
                <FontAwesomeIcon
                  className="text-4xl text-white"
                  icon={faCirclePlus}
                />
                <p className="text-white">Add Another Card</p>
              </button>
            </div>
          ) : (
            <div className="text-center flex flex-col items-center gap-4 text-white md:py-8 md:justify-center">
              <p className="text-xl">No card found.</p>
              <button
                onClick={openAddCardPage}
                className="border border-white p-4 md:p-2 rounded-xl flex flex-row gap-2 items-center font-bold bg-darkblue1 hover:bg-blue1 md:hover:bg-green text-white shadow-md shadow-darkblue1"
              >
                <FontAwesomeIcon className="text-4xl md:text-2xl" icon={faCirclePlus} />
                <p className="text-white md:text-xl">Add Card</p>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Payment;
