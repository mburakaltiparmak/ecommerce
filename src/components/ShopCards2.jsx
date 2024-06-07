import Slider2 from "./Slider2";
import fluidImg from "../assets/shopcards/container-img.png";
import { Link } from "react-router-dom";

export const ShopCards2 = () => {
  return (
    <div
      id="shop-cards-2-container"
      className="w-full font-Montserrat items-center  "
    >
      <div id="slider-container">
        <Slider2 />
      </div>
      <div
        id="container-fluid"
        className="flex flex-row items-center justify-around sm:flex-col-reverse sm:gap-4 sm:px-10 sm:py-10"
      >
        <span id="img-container" className="pl-10 sm:pl-0">
          <img src={fluidImg} alt="" />
        </span>
        <span
          id="text-container"
          className="flex flex-col gap-6 pr-5 sm:pr-0 sm:items-center sm:text-center"
        >
          <h5 className="text-base text-[#BDBDBD] tracking-[0.2px]">
            SUMMER 2020
          </h5>
          <h1 className="text-4xl font-bold text-[#252B42] tracking-[0.2px] ">
            Part of the Neural Universe
          </h1>
          <h4 className="text-xl text-[#737373]  font-normal tracking-[0.2px]">
            We know how large objects will act, but things on a small scale.
          </h4>
          <span className="flex flex-row gap-2 items-center sm:flex-col">
            <Link to="/shop">
              <button className="py-[15px] px-[10px] flex border-solid border-[1px] bg-green sm:bg-blue1 rounded-md w-40 justify-center  text-lg text-white font-bold tracking-normal">
                BUY NOW
              </button>
            </Link>
            <button className="py-[15px] px-[10px] flex border-solid border-[1px] border-green sm:border-blue1 bg-white rounded-md w-40 justify-center text-lg text-green sm:text-blue1 font-bold tracking-normal">
              READ MORE
            </button>
          </span>
        </span>
      </div>
    </div>
  );
};
