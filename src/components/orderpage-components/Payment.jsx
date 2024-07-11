import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Cards from "react-credit-cards-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCirclePlus,
  faSquarePen,
  faTrashCan,
  faSpinner,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { loadingSetter } from "../../store/actions/globalAction";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import PaymentForm from "./PaymentForm";
import {
  getCurrentPayment,
  getPaymentMethod,
  removePayment,
} from "../../store/actions/shoppingCartAction";

const Payment = () => {
  const token = localStorage.getItem("token");
  const baseURL = "https://workintech-fe-ecommerce.onrender.com";
  const instance = axios.create({ baseURL });
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.global.loading);
  //const [paymentMethods, setPaymentMethods] = useState([]);
  const [cardPage, setCardPage] = useState(false);
  const paymentMethods = useSelector(
    (store) => store.shoppingCart.currentPayment
  );
  const openAddCardPage = () => {
    setCardPage(!cardPage);
  };
  const handleDeleteCard = (id) => {
    deletePaymentMethod(id);
  };

  const deletePaymentMethod = (id) => {
    instance
      .delete(`/user/card/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log("kart silindi", res.data);
        // Update payment methods list after deletion
        dispatch(removePayment(id));
      })
      .catch((err) => {
        console.error("kart silinemedi", err);
      });
  };

  useEffect(() => {
    dispatch(getPaymentMethod());
  }, [dispatch]);

  return (
    <div className="bg-darkblue1 border rounded-xl flex flex-row items-center justify-center font-Montserrat font-bold text-2xl w-full">
      {cardPage ? (
        <PaymentForm openAddCardPage={openAddCardPage} />
      ) : (
        <div className="w-full">
          {paymentMethods.length > 0 ? (
            <div className="flex flex-col items-center flex-wrap gap-4 py-4">
              <h2 className="text-white">Your Cards</h2>
              {paymentMethods.map((card, index) => {
                return (
                  <span
                    className="flex flex-col justify-between items-center gap-2 border-2 border-white rounded-xl p-2"
                    key={index}
                  >
                    <span className="text-white py-2">Card Id : {card.id}</span>
                    <span className="flex flex-row items-center justify-between gap-2 ">
                      <Cards
                        number={card.card_no}
                        expiry=""
                        cvc=""
                        name={card.name_on_card}
                        focused=""
                      />
                      <span className="flex flex-col justify-center items-center gap-4">
                        <button className="border  p-4 rounded-xl flex flex-row items-center gap-4 font-bold bg-blue1 hover:bg-green shadow-md shadow-darkblue1">
                          <FontAwesomeIcon
                            className="text-4xl text-white"
                            icon={faCircleCheck}
                          />
                          <p className="text-white">Select Card</p>
                        </button>
                        <button
                          onClick={() => handleDeleteCard(card.id)}
                          className="border  p-4 rounded-xl flex flex-row items-center gap-4 font-bold bg-blue1 hover:bg-green shadow-md shadow-darkblue1"
                        >
                          <FontAwesomeIcon
                            className="text-4xl text-white"
                            icon={faTrashCan}
                          />
                          <p className="text-white">Delete Card</p>
                        </button>
                      </span>
                    </span>
                  </span>
                );
              })}
              <button className="border p-4 my-2 rounded-xl flex flex-row items-center gap-4 font-bold bg-blue1 hover:bg-green shadow-md shadow-darkblue1">
                <FontAwesomeIcon
                  className="text-4xl text-white"
                  icon={faCirclePlus}
                />
                <p onClick={openAddCardPage} className="text-white">
                  Add Another Card
                </p>
              </button>
            </div>
          ) : (
            <div className="w-full text-center flex flex-col items-center gap-4 text-white">
              <p className="text-xl">No card found.</p>
              <button
                onClick={openAddCardPage}
                className="border border-white p-4 rounded-xl flex flex-row gap-2 items-center font-bold bg-darkblue1 hover:bg-blue1 text-white shadow-md shadow-darkblue1"
              >
                <FontAwesomeIcon className="text-4xl" icon={faCirclePlus} />
                <p className="text-white">Add Card</p>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Payment;
