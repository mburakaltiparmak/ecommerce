import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./Stepper.css";

const Stepper2 = () => {
  const steps = {
    1: {
      title: "Customer Info",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suntfugit ratione dolor itaque aspernatur quod dignissimos, ducimus",
    },
    2: {
      title: "Payment",
      description:
        "You may pay your items with Credit/Bank Cards or Shopping Credit.",
    },
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const stepKeys = Object.keys(steps);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row ">
        {stepKeys.map((key, i) => {
          const step = steps[key];
          return (
            <div
              key={i}
              className={`border rounded-md flex flex-row items-start w-96 h-32 ${
                currentStep === i + 1 ? "active" : ""
              } ${i + 1 < currentStep || complete ? "complete" : ""}`}
            >
              <div className="border rounded-md p-6 max-h-12 flex items-center justify-center bg-blue1 text-white">
                <span className="text-3xl font-bold">
                  {i + 1 < currentStep || complete ? (
                    <FontAwesomeIcon icon={faCircleCheck} size="lg" />
                  ) : (
                    i + 1
                  )}
                </span>
              </div>
              <div className="flex flex-col gap-2 px-4">
                <h4 className="text-2xl font-semibold">{step.title}</h4>
                <hr />
                <p className="text-sm font-medium">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-start justify-start">
        {!complete && (
          <button
            className="btn"
            onClick={() => {
              if (currentStep === stepKeys.length) {
                setComplete(true);
              } else {
                setCurrentStep((prev) => prev + 1);
              }
            }}
          >
            {currentStep === stepKeys.length ? "Finish" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Stepper2;