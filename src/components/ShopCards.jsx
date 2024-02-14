import menImg from "../assets/shopcards/men.png";
import womenImg from "../assets/shopcards/women.png";
import accessoriesImg from "../assets/shopcards/accessories.png";
import kidsImg from "../assets/shopcards/kids.png";
/*import "../styles/ShopCards.css";*/
import img1 from "../assets/shopcards/product/1.png";
import img2 from "../assets/shopcards/product/2.png";
import img3 from "../assets/shopcards/product/3.png";
import img4 from "../assets/shopcards/product/4.png";
import img5 from "../assets/shopcards/product/5.png";
import img6 from "../assets/shopcards/product/6.png";
import img7 from "../assets/shopcards/product/7.png";
import img8 from "../assets/shopcards/product/8.png";

export const ShopCards = () => {
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

  return (
    <div
      className="flex flex-col justify-center items-center gap-4"
      id="shop-container"
    >
      <div
        className="w-1200 flex flex-col gap-10 px-4 py-20 items-center content-center"
        id="shop-main-container"
      >
        <div
          className="flex flex-col justify-center items-center text-center gap-2"
          id="shop-text-container"
        >
          <h2
            className="text-gray-700 font-bold text-2xl md:text-3xl leading-7 tracking-tighter"
            id="h2-title"
          >
            EDITOR'S PICK
          </h2>
          <p className="text-gray-500 text-center leading-5" id="paragraph">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div
          className="flex flex-row flex-wrap gap-3 content-center items-center  "
          id="shop-img-container"
        >
          <span className="flex-grow-0" id="first-img-box">
            <img
              className="w-full h-auto object-cover"
              id="men-img"
              src={menImg}
              alt=""
            />
          </span>
          <span
            className="flex flex-row gap-3 items-center"
            id="second-img-box"
          >
            <span id="second-img-box1">
              <img
                className="w-full h-auto object-cover"
                id="women-img"
                src={womenImg}
                alt=""
              />
            </span>
            <span
              className="flex flex-col gap-3 items-center"
              id="second-img-box2"
            >
              <img
                className="w-full h-auto object-cover"
                id="tiny-img"
                src={accessoriesImg}
                alt=""
              />
              <img id="tiny-img" src={kidsImg} alt="" />
            </span>
          </span>
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center w-4/5 "
        id="main-content"
      >
        <div
          className="flex flex-col justify-center items-center text-center gap-2"
          id="shop-text-container"
        >
          <h2 className="text-gray-500 text-center leading-5" id="h3-title">
            Featured Products
          </h2>
          <p
            className="text-gray-700 font-bold text-2xl md:text-3xl leading-7 tracking-tighter"
            id="h2-title"
          >
            BESTSELLER PRODUCTS
          </p>
          <h3 className="text-gray-500 text-center leading-5" id="paragraph">
            Problems trying to resolve the conflict between{" "}
          </h3>
        </div>
        <div
          className="w-1200 flex flex-wrap justify-center gap-8"
          id="content-img-container"
        >
          {Object.keys(photo).map((id, index) => (
            <div className="p-3 flex flex-col" key={index} id="product-content">
              <span id="product-img-content">
                <img src={photo[id]} alt="" />
              </span>
              <span
                className="flex flex-col text-center gap-2"
                id="product-text-content"
              >
                <h4>{productText.title}</h4>
                <h5>{productText.link}</h5>
                <h5>
                  {productText.price1} {productText.price2}
                </h5>
                <span id="colors">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 rounded-full bg-red-500"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                  </div>
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
