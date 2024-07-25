import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faClock,
  faChartArea,
} from "@fortawesome/free-solid-svg-icons";
import { data } from "../../data";
export const Blog = () => {
  const { blogData } = data();
  return (
    <div
      className="flex flex-col font-Montserrat gap-8 items-center md:px-10 px-32  "
      id="blog-container"
    >
      <section
        className="flex flex-col gap-4 text-center items-center "
        id="text-container-1"
      >
        <h6 className="text-blue1 text-lg font-bold">Practice Advice</h6>
        <h3 className="text-darkblue1 text-4xl font-bold ">Featured Posts</h3>
        <p  className="text-gray text-lg">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </section>
      <section
        className="flex flex-row gap-2 sm:gap-8  sm:flex-col justify-between items-center"
      
      >
        {blogData.map((blogItem, index) => (
          <section
            key={index}
            className="flex flex-col gap-4 justify-between shadow-lg shadow-gray border border-gray rounded-md pb-4 "
            id="content-card"
          >
            <span
              className="relative flex items-start justify-start"
              id="img-content"
            >
              <img
                className="w-full h-auto object-cover hover:cursor-pointer"
                src={blogItem.img}
                alt=""
              />
              <h5 className="absolute border border-gray rounded-md w-16 py-1 mt-8 ml-8  text-center text-base text-white font-bold  bg-[#E74040]">
                NEW
              </h5>
            </span>
            <span
              id="content-text-container"
              className="px-5 flex flex-col gap-4 "
            >
              <span className="flex flex-row gap-2 text-sm" id="anchor-content">
                <a className="text-blue1" href="">
                  Google
                </a>
                <a className="text-gray" href="">
                  Trending
                </a>
                <a className="text-gray" href="">
                  New
                </a>
              </span>
              <span
                className="text-darkblue1 text-xl sm:text-2xl font-bold w-3/4 sm:w-full"
                id="title-content"
              >
                <h4>{blogItem.title}</h4>
              </span>
              <span
                className="text-gray text-base sm:text-xl font-normal w-3/4 sm:w-full tracking-[0.2px]"
                id="paragraph-content"
              >
                <p>{blogItem.description}</p>
              </span>
              <span
                className="flex flex-row justify-between"
                id="frame-content"
              >
                <p className="flex items-center gap-1">
                  <FontAwesomeIcon className="text-blue1" icon={faClock} />
                  {blogItem.date}
                </p>
                <p className="flex items-center gap-1">
                  <FontAwesomeIcon className="text-green" icon={faChartArea} />
                  {blogItem.commentNumber} comments
                </p>
              </span>
              <span
                className="flex flex-row items-center text-base font-semibold text-gray "
                id="button-content"
              >
                <button className="flex flex-row items-center gap-1">
                  Learn More{" "}
                  <FontAwesomeIcon
                    className="text-blue1"
                    icon={faAngleRight}
                  />
                </button>
              </span>
            </span>
          </section>
        ))}
      </section>
    </div>
  );
};
