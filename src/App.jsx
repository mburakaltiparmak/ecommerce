/*import "./App.css";*/
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import HomePage from "./pages/HomePage";
import ProductListPages from "./pages/ProductListPages";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./App.css";
import Loading from "./components/Loading";
function App() {
  const baseURL = "https://workintech-fe-ecommerce.onrender.com";
  const instance = axios.create({ baseURL });
  const history = useHistory();
  const dispatch = useDispatch();
  const userReducerData = useSelector((store) => store.userRed);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    /*const userName = localStorage.getItem("userName");
    if (userName) {
      toast.success(`${userName} Welcome!`);
    }
    */
    if (token) {
      instance
        .get("/verify", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          console.log("Auto login", res.data);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userName", res.data.name);
          dispatch(userNameSetter(res.data.name));
        })
        .catch((err) => {
          console.error("login hata", err);
          localStorage.removeItem("token");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);
  if (loading) {
    <Loading />;
  }
  return (
    <div id="main" className="w-full">
      <ToastContainer />
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/shop">
          <ProductListPages />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/pricing">
          <Pricing />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
