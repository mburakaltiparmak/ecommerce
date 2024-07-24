import Slider3 from "./Slider3";
import fluidImg from "../../assets/shopcards/container-img.png";
import { Link } from "react-router-dom";

export const ShopCards2 = () => {
  return (
    <div className="font-Montserrat">
      <div className="flex flex-row items-center justify-center gap-16 sm:flex-col-reverse sm:gap-4 sm:px-10 sm:py-10">
        <span>
          <img className="object-cover" src={fluidImg} alt="" />
        </span>
        <span
          id="text-container"
          className="flex flex-col gap-4 justify-center  sm:items-center sm:text-center"
        >
          <h5 className="text-base text-[#BDBDBD]">SUMMER 2020</h5>
          <h1 className="text-4xl font-bold text-[#252B42]  ">
            Part of the Neural Universe
          </h1>
          <h4 className="text-xl text-[#737373]  font-normal ">
            We know how large objects will act, but things on a small scale.
          </h4>
          <span className="flex flex-row gap-2 items-center sm:flex-col">
            <Link to="/shop">
              <button className="flex px-8 py-4 border-2 bg-green sm:bg-blue1 rounded-lg justify-center  text-lg text-white font-bold ">
                BUY NOW
              </button>
            </Link>
            <button className="flex px-8 py-4 border-2 border-green sm:border-blue1 bg-white rounded-lg  justify-center text-lg text-green sm:text-blue1 font-bold ">
              READ MORE
            </button>
          </span>
        </span>
      </div>
    </div>
  );
};
