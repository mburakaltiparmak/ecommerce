import "../styles/Blog.css";
import blogimg1 from "../assets/shopcards/blog/blogimg1.png";
import blogimg2 from "../assets/shopcards/blog/blogimg2.png";
import blogimg3 from "../assets/shopcards/blog/blogimg3.png";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faClock,
  faChartArea,
} from "@fortawesome/free-solid-svg-icons";
export const Blog = () => {
  const blogData = [
    {
      img: blogimg1,
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      commentNumber: "10",
    },
    {
      img: blogimg2,
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      commentNumber: "10",
    },
    {
      img: blogimg3,
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      commentNumber: "10",
    },
  ];
  return (
    <div
      className="flex flex-col font-Montserrat gap-8 py-28 items-center tracking-[0.2px] "
      id="blog-container"
    >
      <section
        className="flex flex-col gap-4 text-center items-center "
        id="text-container-1"
      >
        <h6 className="text-blue1 text-lg font-bold">Practice Advice</h6>
        <h3 className="text-darkblue1 text-4xl font-bold ">Featured Posts</h3>
        <p id="paragraph" className="text-gray text-lg w-3/5">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </section>
      <label
        className="flex flex-row gap-2 w-4/5 justify-between items-center"
        htmlFor="blog"
        id="blog-content"
      >
        {blogData.map((blogItem, index) => (
          <section
            key={index}
            className="flex flex-col gap-4 justify-between shadow-md border border-black"
            id="content-card"
          >
            <span id="img-content">
              <img className="w-full" src={blogItem.img} alt="" />
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
                className="text-darkblue1 text-xl font-normal w-3/4"
                id="title-content"
              >
                <h4>{blogItem.title}</h4>
              </span>
              <span
                className="text-gray text-base font-normal w-3/4 tracking-[0.2px]"
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
                className="flex flex-row text-base font-semibold text-gray pb-8"
                id="button-content"
              >
                <button className="flex items-center gap-2">
                  Learn More{" "}
                  <FontAwesomeIcon
                    className="w-[12px] h-[24px] text-blue1"
                    icon={faAngleRight}
                  />
                </button>
              </span>
            </span>
          </section>
        ))}
      </label>
    </div>
  );
};
