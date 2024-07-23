import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faHome,
  faMoneyBill1,
  faTruckArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Stepper = ({ step1, step2, step3,step4, currentStep }) => {
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
    {
      title: "Successfull Order",
      logo: faCheck,
      success: faCheck,
      step: step4,
    }
  ];

  const displaySteps = (
    <div className="flex justify-between items-center shadow-lg shadow-darkblue1 px-2">
      {steps.map((step, index) => (
        <div
          className="flex flex-row items-center justify-between py-2"
          key={index}
        >
          <div
            className={`${
              currentStep >= index + 1
                ? "border-green bg-green transition duration-500 ease-in-out"
                : "border-white bg-blue1 transition duration-500 ease-in-out"
            } relative flex flex-col items-center px-2 justify-between text-white border-4 rounded-xl py-1 shadow-sm shadow-blue1 h-32 w-32`}
          >
            <div className="rounded-full text-white bg-blue1 transition duration-500 ease-in-out border-2 border-darkblue1 h-14 w-14 flex items-center justify-center shadow-md shadow-black">
              <FontAwesomeIcon
                className="text-2xl"
                icon={currentStep >= index + 1 ? step.success : step.logo}
              />
            </div>
            <div className="flex flex-col items-center text-center drop-shadow-md">
              {step.title}
            </div>
          </div>
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
