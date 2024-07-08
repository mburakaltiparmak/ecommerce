import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { toast } from "react-toastify";
import {
  faCheck,
  faHome,
  faMoneyBill1,
  faSpinner,
  faTruckArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Stepper2 = ({ step1, step2, step3 }) => {
  const steps = [
    {
      title: "Address Information",
      logo: faHome,
      success: faCheck,
    },
    {
      title: "Shipment Selection",
      logo: faTruckArrowRight,
      success: faCheck,
    },
    {
      title: "Payment Options",
      logo: faMoneyBill1,
      success: faCheck,
    },
  ];

  const stepStatuses = [step1, step2, step3];

  const getIcon = (index, step) => {
    return stepStatuses[index] ? step.success : step.logo;
  };

  const displaySteps = (
    <div className="w-full flex justify-between items-center shadow-lg shadow-darkblue1">
      {steps.map((step, index) => (
        <div
          className="flex flex-auto items-center justify-between"
          key={index}
        >
          <div className="relative flex flex-col items-center px-2 justify-between border-white border-2 rounded-xl py-1 shadow-sm shadow-white h-28 w-28">
            <div className="rounded-full text-white bg-blue1 transition duration-500 ease-in-out border-2 border-white h-10 w-10 flex items-center justify-center shadow-md shadow-black">
              <FontAwesomeIcon
                className="shadow-xl shadow-black"
                icon={getIcon(index, step)}
              />
            </div>
            <div className="flex flex-col items-center text-center">
              {step.title}
            </div>
          </div>
          {index < steps.length - 1 ? (
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out" />
          ) : (
            <div className="rounded-full text-white bg-blue1 transition duration-500 ease-in-out border-2 border-white h-16 w-16 flex items-center justify-center shadow-md shadow-black mx-[25%] ">
              <FontAwesomeIcon className="h-8 w-8" icon={faSpinner} spinPulse />
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-darkblue1 text-white font-bold flex justify-between rounded-xl flex-col p-1">
      {displaySteps}
      <div></div>
      <div></div>
    </div>
  );
};

export default Stepper2;
