import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import {
  faCheck,
  faHome,
  faMoneyBill1,
  faSpinner,
  faTruckArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Stepper = ({ step1, step2, step3, currentStep }) => {
  const steps = [
    {
      title: "Address Information",
      logo: faHome,
      success: faCheck,
      step: step1,
    },
    {
      title: "Shipment Selection",
      logo: faTruckArrowRight,
      success: faCheck,
      step: step2,
    },
    {
      title: "Payment Options",
      logo: faMoneyBill1,
      success: faCheck,
      step: step3,
    },
  ];

  const displaySteps = (
    <div className="w-full flex justify-between items-center shadow-lg shadow-darkblue1 px-2">
      {steps.map((step, index) => (
        <div
          className="flex flex-auto items-center justify-between py-2"
          key={index}
        >
          <div
            className={`${
              currentStep >= index + 1
                ? "border-green bg-green transition duration-500 ease-in-out"
                : "border-white bg-blue1 transition duration-500 ease-in-out"
            } relative flex flex-col items-center px-2 justify-between text-white border-4 rounded-xl py-1 shadow-sm shadow-blue1 h-28 w-28`}
          >
            <div className="rounded-full text-white bg-blue1 transition duration-500 ease-in-out border-2 border-darkblue1 h-10 w-10 flex items-center justify-center shadow-md shadow-black">
              <FontAwesomeIcon
                className="shadow-xl shadow-black"
                icon={
                  index + 1 === 1 && step1
                    ? steps[0].success
                    : index + 1 === 2 && step2
                    ? steps[1].success
                    : index + 1 === 3 && step3
                    ? steps[2].success
                    : index + 1 === 1
                    ? steps[0].logo
                    : index + 1 === 2
                    ? steps[1].logo
                    : index + 1 === 3
                    ? steps[2].logo
                    : null
                }
              />
            </div>
            <div className="flex flex-col items-center text-center drop-shadow-md">
              {step.title}
            </div>
          </div>
          {index < steps.length - 1 ? (
            <div
              className={`${
                currentStep - 1 >= index + 1 ? "text-green" : "text-white"
              } flex-auto border-t-4 transition duration-500 ease-in-out`}
            />
          ) : (
            <div className="rounded-full text-white bg-blue1 transition duration-500 ease-in-out border-2 border-white h-16 w-16 flex items-center justify-center shadow-md shadow-black mx-[25%]">
              <FontAwesomeIcon
                className="h-8 w-8"
                icon={step3 ? faCheck : faSpinner}
                spinPulse
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-darkblue1 text-white font-bold flex justify-between rounded-xl flex-col p-1">
      {displaySteps}
    </div>
  );
};

export default Stepper;
