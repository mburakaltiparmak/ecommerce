import menImg from "../assets/shopcards/men.png";
import womenImg from "../assets/shopcards/women.png";
import accessoriesImg from "../assets/shopcards/accessories.png";
import kidsImg from "../assets/shopcards/kids.png";
import "../styles/ShopCards.css";
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
        img1, img2, img3, img4, img5, img6, img7, img8
    };
    const productText = {
        title: "Graphic Design",
        link: "English Department",
        price1: "$16.48",
        price2: "$6.48",
    };

    return (
        <div id="shop-container">
            <div id="shop-main-container">
                <div id="shop-text-container">
                    <h2 id="h2-title">EDITOR'S PICK</h2>
                    <p id="paragraph">Problems trying to resolve the conflict between</p>
                </div>
                <div id="shop-img-container">
                    <span id="first-img-box"><img id="men-img" src={menImg} alt="" /></span>
                    <span id="second-img-box">
                        <span id="second-img-box1"><img id="women-img" src={womenImg} alt="" /></span>
                        <span id="second-img-box2"><img id="tiny-img" src={accessoriesImg} alt="" /><img id="tiny-img" src={kidsImg} alt="" /></span>
                    </span>
                </div>
            </div>
            <div id="main-content">
                <div id="shop-text-container">
                    <h2 id="h3-title">Featured Products</h2>
                    <p id="h2-title">BESTSELLER PRODUCTS</p>
                    <h3 id="paragraph">Problems trying to resolve the conflict between </h3>
                </div>
                <div id="content-img-container">
                {Object.keys(photo).map((key) => (
                        <div id="product-content">
                            <span id="product-img-content">
                                <img src={photo[key]} alt="" />
                            </span>
                            <span id="product-text-content">
                                <h4>{productText.title}</h4>
                                <h5>{productText.link}</h5>
                                <h5>{productText.price1} {productText.price2}</h5>
                                <span id="colors"></span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
