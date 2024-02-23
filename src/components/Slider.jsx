import React, { useState, useEffect } from "react";
import { data } from "../data";
import { useHistory } from "react-router-dom";

const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export default function Slider({
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);
  const { slides } = data();
  const history = useHistory();

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative font-Montserrat bg-[#01B6DD]  ">
      <div
        className="flex transition-transform ease-out duration-500 h-[640px]   "
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex justify-center flex-shrink-0 relative "
          >
            <img
              src={slide.img}
              alt={`Slide ${index}`}
              className="w-lvh object-cover sm:object-cover sm:w-fit  "
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-items-start sm:justify-center sm:items-center pl-16 sm:pl-0 ">
              <div className="text-white sm:items-center  flex flex-col gap-8 sm:px-0 px-40">
                <h2 className="font-bold text-xl">{slide.dateHero}</h2>
                <h1 className="font-bold sm:text-center text-[58px]">
                  {slide.title}
                </h1>
                <p className="font-normal text-[20px] w-3/5 sm:w-4/6 sm:text-center">
                  {slide.description}
                </p>
                <button
                  onClick={() => history.push("/shop")}
                  className="py-[15px] px-[10px] flex border-solid border-[1px] bg-green rounded-md w-40 justify-center text-lg font-bold tracking-normal"
                >
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0 sm:hidden">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
                transition-all w-20 h-3 bg-white 
                ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
