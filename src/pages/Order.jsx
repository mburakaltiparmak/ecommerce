import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCirclePlus,
  faSquarePen,
  faTrashCan,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";
import Stepper2 from "../components/orderpage-components/Stepper2";
import AddressForm from "../components/orderpage-components/AddressForm";
import Summary from "../components/Summary";
import "../App.css";
import Addresses from "../components/orderpage-components/Addresses";
import { useDispatch } from "react-redux";
import Shipment from "../components/orderpage-components/Shipment";
import Payment from "../components/orderpage-components/Payment";

const Order = () => {
  const [addressFormIsOpen, setAddressFormIsOpen] = useState(false);
  const [addressData, setAddressData] = useState([]);
  const [updateAddressForm, setUpdateAddressForm] = useState(false);
  const [updatingAddressData, setUpdatingAddressData] = useState(null);
  const [step1, setStep1] = useState(false);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const baseURL = "https://workintech-fe-ecommerce.onrender.com";
  const token = localStorage.getItem("token");
  const instance = axios.create({ baseURL });
  const dispatch = useDispatch();

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      if (currentStep === 2) {
        setStep2(false);
      } else if (currentStep === 3) {
        setStep3(false);
      }
    } else {
      toast.info("You can't step back any further!");
    }
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleAddAddress = () => {
    setAddressFormIsOpen(!addressFormIsOpen);
    setUpdateAddressForm(false); // Reset update form state
    setUpdatingAddressData(null); // Reset updating address data
  };

  const getAddress = () => {
    instance
      .get("/user/address", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log("gelen adres", res.data);
        setAddressData(res.data);
      })
      .catch((err) => {
        console.error("adres gelmedi", err);
      });
  };

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <div className="flex flex-col px-40 justify-around gap-1">
      <Stepper2
        step1={step1}
        step2={step2}
        step3={step3}
        currentStep={currentStep}
      />
      <div className="flex justify-between my-1">
        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className={`${
            currentStep === 1
              ? `bg-gray cursor-not-allowed hover:bg-red hover:border-gray`
              : `bg-darkblue1 cursor-pointer hover:bg-green hover:border-blue1`
          }  shadow-md shadow-darkblue1 text-white uppercase py-2 px-4 rounded-xl font-bold  border-2 border-darkblue1   hover:text-white transition duration-200 ease-in-out`}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="bg-darkblue1 shadow-md shadow-darkblue1 text-white uppercase py-2 px-4 rounded-xl font-bold cursor-pointer border-2 border-darkblue1 hover:bg-blue1 hover:border-blue1 hover:text-white transition duration-200 ease-in-out"
        >
          Next
        </button>
      </div>
      <div>
        {currentStep === 1 && (
          <>
            {addressFormIsOpen || updateAddressForm ? (
              <span className="flex flex-row justify-between">
                <div className="block border rounded-lg px-32">
                  <AddressForm
                    addressData={updatingAddressData}
                    addressFormIsOpen={addressFormIsOpen}
                    setAddressFormIsOpen={setAddressFormIsOpen}
                    updateAddressForm={updateAddressForm}
                    setUpdateAddressForm={setUpdateAddressForm}
                  />
                </div>
                <Summary />
              </span>
            ) : (
              <div className="flex flex-row justify-between gap-2">
                <div className="flex flex-col">
                  <button
                    onClick={handleAddAddress}
                    className="border border-darkblue1 p-4 rounded-xl flex flex-row gap-2 items-center font-bold bg-darkblue1 hover:bg-blue1 text-white shadow-md shadow-darkblue1"
                  >
                    <FontAwesomeIcon className="text-4xl" icon={faCirclePlus} />
                    <p className="text-white">Add Address</p>
                  </button>
                </div>
                <div className="rounded-xl flex items-center p-2 bg-darkblue1 text-white font-bold shadow-xl drop-shadow-xl shadow-darkblue1">
                  <section className="px-1 w-full">
                    {Array.isArray(addressData) && addressData.length > 0 ? (
                      <Addresses
                        addressData={addressData}
                        step1={step1}
                        setStep1={setStep1}
                        step2={step2}
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                      />
                    ) : (
                      <p>No addresses found.</p>
                    )}
                  </section>
                </div>
                <Summary />
              </div>
            )}
          </>
        )}
        {currentStep === 2 && (
          <div className="flex flex-row gap-2 justify-between">
            <Shipment /> <Summary />
          </div>
        )}
        {currentStep === 3 && (
          <div className="flex flex-row gap-2 justify-between">
            {" "}
            <Payment /> <Summary />{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
