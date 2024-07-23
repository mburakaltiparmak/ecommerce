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
import Stepper from "../components/orderpage-components/Stepper";
import AddressForm from "../components/orderpage-components/AddressForm";
import Summary from "../components/Summary";
import "../App.css";
import Addresses from "../components/orderpage-components/Addresses";
import { useDispatch } from "react-redux";
import Shipment from "../components/orderpage-components/Shipment";
import Payment from "../components/orderpage-components/Payment";
import CCVForm from "../components/orderpage-components/CCVForm";

const Order = () => {
  const [addressFormIsOpen, setAddressFormIsOpen] = useState(false);
  const [addressData, setAddressData] = useState([]);
  const [updateAddressForm, setUpdateAddressForm] = useState(false);
  const [updatingAddressData, setUpdatingAddressData] = useState(null);
  const [step1, setStep1] = useState(false);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
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
      } else if (currentStep === 4) {
        setStep4(false);
      }
    } else {
      toast.info("You can't step back any further!");
    }
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleAddAddress = () => {
    setAddressFormIsOpen(!addressFormIsOpen);
    setUpdateAddressForm(false);
    setUpdatingAddressData(null);
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
        if (res.data.length === 0) {
          setSelectedAddress(null); // Set selectedAddress to null if no addresses found
        }
      })
      .catch((err) => {
        console.error("adres gelmedi", err);
      });
  };

  useEffect(() => {
    getAddress();
  }, []);

  const isNextDisabled = () => {
    if (currentStep === 1 && !step1) return true;
    if (currentStep === 2 && (!step1 || !step2)) return true;
    if (currentStep === 3 && (!step1 || !step2 || !step3 || !step4))
      return true;
    return false;
  };

  return (
    <div className="flex flex-col px-40 justify-around gap-1">
      <Stepper
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
          } shadow-md shadow-darkblue1 text-white uppercase py-2 px-4 rounded-xl font-bold  border-2 border-darkblue1 hover:text-white transition duration-200 ease-in-out`}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={isNextDisabled()}
          className={`${
            isNextDisabled()
              ? `bg-gray cursor-not-allowed hover:bg-red hover:border-gray`
              : `bg-darkblue1 border-blue1 cursor-pointer hover:bg-green hover:border-white`
          } shadow-md shadow-darkblue1 text-white uppercase py-2 px-4 rounded-xl font-bold border-2 border-darkblue1 hover:text-white transition duration-200 ease-in-out`}
        >
          Next
        </button>
      </div>
      <div>
        {currentStep === 1 && (
          <>
            {addressFormIsOpen || updateAddressForm ? (
              <span className="flex flex-row justify-between gap-2">
                <div className="block border rounded-lg px-32 w-full">
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
                <div className="rounded-xl w-full flex items-center p-2 bg-darkblue1 text-white font-bold shadow-xl drop-shadow-xl shadow-darkblue1">
                  <section className="px-1 w-full">
                    {Array.isArray(addressData) && addressData.length > 0 ? (
                      <Addresses
                        addressData={addressData}
                        setAddressData={setAddressData} // Pass addressData to Addresses component
                        step1={step1}
                        setStep1={setStep1}
                        step2={step2}
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                        selectedAddress={selectedAddress} // Pass selectedAddress state
                        setSelectedAddress={setSelectedAddress} // Pass setSelectedAddress function
                      />
                    ) : (
                      <div className="w-full text-center flex flex-col items-center gap-4">
                        <p>No addresses found.</p>
                        <button
                          onClick={handleAddAddress}
                          className="border border-white p-4 rounded-xl flex flex-row gap-2 items-center font-bold bg-darkblue1 hover:bg-blue1 text-white shadow-md shadow-darkblue1"
                        >
                          <FontAwesomeIcon
                            className="text-4xl"
                            icon={faCirclePlus}
                          />
                          <p className="text-white">Add Address</p>
                        </button>
                      </div>
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
            <Shipment
              step2={step2}
              setStep2={setStep2}
              setCurrentStep={setCurrentStep}
            />
            <Summary />
          </div>
        )}
        {currentStep === 3 && (
          <div className="flex flex-row gap-2 justify-between">
            <Payment
              step3={step3}
              setStep3={setStep3}
              setCurrentStep={setCurrentStep}
              setModalOpen={setModalOpen}
              modalOpen={modalOpen}
              currentStep={currentStep}
            />
            <Summary />
          </div>
        )}
        {currentStep === 4 && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <CCVForm
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              setStep1={setStep1}
              setStep2={setStep2}
              setStep3={setStep3}
              setStep4={setStep4}
              setCurrentStep={setCurrentStep}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
