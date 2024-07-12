import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Body from "./layouts/Body";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isLogin } from "./store/actions/loginAction";

function App() {
  return (
    <div id="main" className="w-full">
      <ToastContainer />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
