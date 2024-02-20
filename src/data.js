import carouselImg from "./assets/header/carouselImg.jpg";
import img1 from "./assets/shopcards/product/1.png";
import img2 from "./assets/shopcards/product/2.png";
import img3 from "./assets/shopcards/product/3.png";
import img4 from "./assets/shopcards/product/4.png";
import img5 from "./assets/shopcards/product/5.png";
import img6 from "./assets/shopcards/product/6.png";
import img7 from "./assets/shopcards/product/7.png";
import img8 from "./assets/shopcards/product/8.png";
import blogimg1 from "./assets/shopcards/blog/blogimg1.png";
import blogimg2 from "./assets/shopcards/blog/blogimg2.png";
import blogimg3 from "./assets/shopcards/blog/blogimg3.png";
import boxImg1 from "./assets/productlistpage/shop/1.png";
import boxImg2 from "./assets/productlistpage/shop/2.png";
import boxImg3 from "./assets/productlistpage/shop/3.png";
import boxImg4 from "./assets/productlistpage/shop/4.png";
import boxImg5 from "./assets/productlistpage/shop/5.png";
import productImg1 from "./assets/productlistpage/products/1.png";
import productImg2 from "./assets/productlistpage/products/2.png";
import productImg3 from "./assets/productlistpage/products/3.png";
import productImg4 from "./assets/productlistpage/products/4.png";
import productImg5 from "./assets/productlistpage/products/5.png";
import productImg6 from "./assets/productlistpage/products/6.png";
import productImg7 from "./assets/productlistpage/products/7.png";
import productImg8 from "./assets/productlistpage/products/8.png";
import productImg9 from "./assets/productlistpage/products/9.png";
import productImg10 from "./assets/productlistpage/products/10.png";
import productImg11 from "./assets/productlistpage/products/11.png";
import productImg12 from "./assets/productlistpage/products/12.png";
import boxGroupImg1 from "./assets/team/box/2.png";
import boxGroupImg2 from "./assets/team/box/3.png";
import boxGroupImg3 from "./assets/team/box/4.png";
import boxGroupImg4 from "./assets/team/box/5.png";
import memberImg1 from "./assets/team/members/1.png";
import memberImg2 from "./assets/team/members/2.png";
import memberImg3 from "./assets/team/members/3.png";
import memberImg4 from "./assets/team/members/4.png";
import memberImg5 from "./assets/team/members/5.png";
import memberImg6 from "./assets/team/members/6.png";
import memberImg7 from "./assets/team/members/7.png";
import memberImg8 from "./assets/team/members/8.png";
import memberImg9 from "./assets/team/members/9.png";

export const data = () => {
  const slides = [
    {
      img: carouselImg,
      dateHero: "SUMMER 2020",
      title: "NEW COLLECTION",
      description:
        "We know how large objects will act, but things on a small scale.",
    },
    {
      img: carouselImg,
      dateHero: "SUMMER 2020",
      title: "NEW COLLECTION",
      description:
        "We know how large objects will act, but things on a small scale.",
    },
  ];
  const photo = {
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
  };
  const productText = {
    title: "Graphic Design",
    link: "English Department",
    price1: "$16.48",
    price2: "$6.48",
  };
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
  const boxData = [
    {
      img: boxImg1,
      title: "CLOTHS",
      count: 5,
    },
    {
      img: boxImg2,
      title: "CLOTHS",
      count: 5,
    },
    {
      img: boxImg3,
      title: "CLOTHS",
      count: 5,
    },
    {
      img: boxImg4,
      title: "CLOTHS",
      count: 5,
    },
    {
      img: boxImg5,
      title: "CLOTHS",
      count: 5,
    },
  ];
  const productImgs = [
    productImg1,
    productImg2,
    productImg3,
    productImg4,
    productImg5,
    productImg6,
    productImg7,
    productImg8,
    productImg9,
    productImg10,
    productImg11,
    productImg12,
  ];
  const boxGroup = [boxGroupImg1, boxGroupImg2, boxGroupImg3, boxGroupImg4];
  const member = [
    {
      img: memberImg1,
      username: "username",
      job: "profession",
    },
    {
      img: memberImg2,
      username: "username",
      job: "profession",
    },
    {
      img: memberImg3,
      username: "username",
      job: "profession",
    },
    {
      img: memberImg4,
      username: "username",
      job: "profession",
    },
    {
      img: memberImg5,
      username: "username",
      job: "profession",
    },
    {
      img: memberImg6,
      username: "username",
      job: "profession",
    },
    {
      img: memberImg7,
      username: "username",
      job: "profession",
    },
    {
      img: memberImg8,
      username: "username",
      job: "profession",
    },
    {
      img: memberImg9,
      username: "username",
      job: "profession",
    },
  ];

  return {
    slides,
    photo,
    productText,
    blogData,
    boxData,
    productImgs,
    boxGroup,
    member,
  };
};
