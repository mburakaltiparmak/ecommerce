import { Carousel } from "@material-tailwind/react";
import carouselImg from "../assets/header/carouselImg.jpg";
import "../styles/Carousel.css";
export function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <div key={i} className="relative">
              <p>{i + 1}</p>{" "}
              <span
                className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-lg font-bold"></div>
            </div>
          ))}
        </div>
      )}
    >
      <div className="relative">
        <img src={carouselImg} className="h-full w-full object-cover" />
      </div>

      <div className="relative">
        <img src={carouselImg} className="h-full w-full object-cover" />
      </div>
    </Carousel>
  );
}
