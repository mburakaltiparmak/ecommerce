import React, { useState, useEffect } from "react";
import { data } from "../data";
import { useSelector } from "react-redux";

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

export default function MiniSlider({
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);
  const { miniSlider } = data();
  const productDataObject = useSelector(
    (store) => store.product.productDataObject
  );

  // Check if productDataObject is available and has images before accessing them
  const productImages =
    productDataObject && productDataObject.images
      ? productDataObject.images
      : [];

  const prev = () =>
    setCurr((curr) => (curr === 0 ? productImages.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === productImages.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  if (!productImages.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="overflow-hidden relative font-Montserrat shadow-lg shadow-gray">
      <div
        className="flex transition-transform ease-out duration-500 h-[450px]"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {productImages.map((slide, index) => (
          <div
            key={index}
            className="w-full flex justify-center flex-shrink-0 relative"
          >
            <img src={slide.url} className="w-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-items-start pl-16"></div>
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
          {productImages.map((_, i) => (
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
