import Summary from "../components/Summary";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCirclePlus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  IsChecked,
  clearCart,
  removeFromCart,
  updateCart,
} from "../store/actions/shoppingCartAction";
import Stepper from "../components/orderpage-components/Stepper";
import AddressPopup from "../components/orderpage-components/AddressPopup";
import Stepper2 from "../components/orderpage-components/Stepper2";
import "../App.css";

import AddressForm from "../components/orderpage-components/AddressForm";

const Order = () => {
  const [addressFormIsOpen, setAddressFormIsOpen] = useState(false);
  const handleAddAddress = () => {
    setAddressFormIsOpen(!addressFormIsOpen);
  };
  return (
    <div className="flex flex-col px-40 gap-4">
      <Stepper2 />
      <div className="flex flex-row items-start justify-between">
        <div>
          {addressFormIsOpen ? (
            <div className="border rounded-lg px-48 pb-4">
              <AddressForm
                addressFormIsOpen={addressFormIsOpen}
                setAddressFormIsOpen={setAddressFormIsOpen}
              />
            </div>
          ) : (
            <button
              onClick={handleAddAddress}
              className="border p-4 rounded-xl flex flex-row items-center gap-4 font-bold bg-darkblue1 "
            >
              <FontAwesomeIcon
                className="text-5xl text-blue1"
                icon={faCirclePlus}
              />
              <p className="text-white">Add Address</p>
            </button>
          )}
        </div>
        <Summary />
      </div>
    </div>
  );
};
export default Order;
