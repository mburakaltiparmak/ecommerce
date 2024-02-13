import "../styles/Header.css";
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
import { CarouselCustomNavigation } from "../components/CarouselCustomNavigation";
CarouselCustomNavigation;

const Header = () => {
  const phoneText = "(225) 555-0118";
  const mailText = "michelle.rivera@example.com";
  return (
    <header className="w-full text-white font-montserrat font-bold text-base leading-6 tracking-tighter">
      <div id="navbar-dark" className="bg-[#252B42]">
        <label id="contact" htmlFor="contact">
          <span id="contact-span">
            <p id="contact-logo">
              <img src={phoneIcon} />
              {phoneText}
            </p>
          </span>
          <span id="contact-span">
            <p id="contact-logo">
              <img src={mailIcon} />
              {mailText}
            </p>
          </span>
        </label>
        <p>Follow Us and get a chance to win 80% off</p>
        <label id="social-media" htmlFor="">
          <p>Follow Us :</p>
          <span id="social-media-logos">
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
      <div id="navbar-light" className="flex flex-col items-start gap-12">
        <h3 className="text-2xl font-bold leading-6 tracking-tighter">BrandName</h3>
        <label id="collapse" htmlFor="">
          <div>Home</div>
          <div>Shop</div>
          <div>About</div>
          <div>Blog</div>
          <div>Contact</div>
          <div>Pages</div>
        </label>
        <label id="navbar-nav" htmlFor="">
          <div id="navbar-nav-icons"><img src={userIcon}/>Login/Register</div>
          <div id="navbar-nav-icons"><img src={searchIcon}/>Search</div>
          <div id="navbar-nav-icons"><img src={cartIcon}/>Cart</div>
          <div id="navbar-nav-icons"><img src={favIcon}/>Favorites</div>
        </label>
      </div>
      <hr />
      <div><CarouselCustomNavigation /></div>
    </header>
  );
};
export default Header;
