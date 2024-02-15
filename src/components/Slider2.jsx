import React, { useState, useEffect } from "react";
import sliderImg from "../assets/shopcards/slider2.png";
import "../styles/Slider.css";

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

export default function Slider2({
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);
  const slides = [
    {
      img: sliderImg,
      dateHero: "SUMMER 2020",
      title: "Vita Classic Product",
      description:
        "We know how large objects will act, We know how are objects will act, We know",
      price: "$16.48",
    },
    {
      img: sliderImg,
      dateHero: "SUMMER 2020",
      title: "Vita Classic Product",
      description:
        "We know how large objects will act, We know how are objects will act, We know",
      price: "$16.48",
    },
  ];

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
    <div className="overflow-hidden relative bg-[#23856D] font-Montserrat w-full pt-10">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative ">
            <span
              id="slider-container"
              className="flex justify-around flex-row-reverse items-center"
            >
              <span
                id="box-1"
                className="px-40 pb-0 flex items-end min-h-1/2 min-w-1/2 object-contain resize-none"
              >
                <img
                  src={slide.img}
                  alt={`Slide ${index}`}
                  className="min-w-full min-h-full object-contain resize-none"
                  id="slider-img"
                />
              </span>
              <span
                id="box-2"
                className="flex items-center justify-items-start "
              >
                <div className="">
                  <div className="text-white font-montserrat flex flex-col gap-8 px-40 ">
                    <h2 className="font-bold text-xl">{slide.dateHero}</h2>
                    <h1 className="font-bold text-[58px] w-3/4">
                      {slide.title}
                    </h1>
                    <p className="font-normal text-[20px] w-4/6">
                      {slide.description}
                    </p>
                    <span className="flex flex-row gap-8 items-center">
                      <p className="text-2xl font-bold">{slide.price}</p>
                      <button className="py-[15px] px-[10px] flex border-solid border-[1px] bg-green rounded-md w-40 justify-center bg-[#2DC071] text-lg font-bold tracking-normal">
                        ADD TO CART
                      </button>
                    </span>
                  </div>
                </div>
              </span>
            </span>
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

      <div className="absolute bottom-4 right-0 left-0">
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
