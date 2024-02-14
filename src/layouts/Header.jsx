/*import "../styles/Header.css";*/
import phoneIcon from "../assets/header/phone.svg";
import mailIcon from "../assets/header/navbarmail.svg";
import instagramIcon from "../assets/header/instagram.svg";
import youtubeIcon from "../assets/header/youtube.svg";
import facebookIcon from "../assets/header/facebook.svg";
import twitterIcon from "../assets/header/twitter.svg";
import userIcon from "../assets/header/user.svg";
import searchIcon from "../assets/header/search.svg";
import cartIcon from "../assets/header/cart.svg";
import favIcon from "../assets/header/fav.svg";

import Dropdown from "../components/Dropdown";
import Slider from "../components/Slider";

const Header = () => {
  const phoneText = "(225) 555-0118";
  const mailText = "michelle.rivera@example.com";
  return (
    <header className="w-full text-white font-montserrat font-bold text-base leading-6 tracking-tighter">
      <div
        id="navbar-dark"
        className="flex justify-between items-center bg-[#252b42] p-4 md:px-8"
      >
        <label id="contact" htmlFor="contact" className="flex items-center">
          <span className="flex gap-2 pr-4" id="contact-span">
            <p className="flex text-center gap-2" id="contact-logo">
              <img src={phoneIcon} />
              {phoneText}
            </p>
          </span>
          <span className="flex gap-2 pr-4" id="contact-span">
            <a className="flex text-center gap-2" href="" id="contact-logo">
              <img src={mailIcon} />
              {mailText}
            </a>
          </span>
        </label>
        <p>Follow Us and get a chance to win 80% off</p>
        <label
          id="social-media"
          htmlFor=""
          className="flex h-20 pb-2 items-center gap-4 md:gap-8"
        >
          <p>Follow Us :</p>
          <span
            id="social-media-logos"
            className="flex gap-4 items-center pb-1"
          >
            <a href="https://www.instagram.com/">
              <img src={instagramIcon} />
            </a>
            <a href="https://www.youtube.com/">
              <img src={youtubeIcon} />
            </a>
            <a href="https://www.facebook.com/">
              <img src={facebookIcon} />
            </a>
            <a href="https://www.twitter.com/">
              <img src={twitterIcon} />
            </a>
          </span>
        </label>
      </div>
      <div
        id="navbar-light"
        className="flex justify-between items-center bg-white p-2 md:p-4 gap-10"
      >
        <h3 className="font-bold pr-4 md:pr-8 text-[#252b42]">BrandName</h3>
        <label
          id="collapse"
          htmlFor=""
          className="flex w-1/3 pb-1 justify-center gap-2 text-gray-400 md:justify-end md:pr-4"
        >
          <Dropdown />
        </label>
        <label
          id="navbar-nav"
          htmlFor=""
          className="flex items-center justify-between gap-4 md:gap-8 text-[#23a6f0]"
        >
          <button
            id="navbar-nav-icons"
            className="flex text-center gap-2 items-center"
          >
            <img className="w-4 h-4" src={userIcon} />
            Login/Register
          </button>
          <button
            className="flex text-center gap-2 items-center"
            id="navbar-nav-icons"
          >
            <img className="w-4 h-4" src={searchIcon} />
          </button>
          <button
            className="flex text-center gap-2 items-center"
            id="navbar-nav-icons"
          >
            <img className="w-4 h-4" src={cartIcon} />1
          </button>
          <button
            className="flex text-center gap-2 items-center"
            id="navbar-nav-icons"
          >
            <img className="w-4 h-4" src={favIcon} />2
          </button>
        </label>
      </div>
      <hr />
      <div>
        <Slider className="bg-black" />
      </div>
      <div></div>
    </header>
  );
};
export default Header;
