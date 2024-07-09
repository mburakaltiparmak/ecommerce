import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Homepage from "../pages/Homepage";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Pricing from "../pages/Pricing";
import Team from "../pages/Team";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Loading from "../components/Loading";
import Cart from "../pages/Cart";
import Order from "../pages/Order";
import { userNameSetter } from "../store/actions/userAction";
import { getCategories } from "../store/actions/globalAction";
const Body = () => {
  const baseURL = "https://workintech-fe-ecommerce.onrender.com";
  const instance = axios.create({ baseURL });
  const history = useHistory();
  const dispatch = useDispatch();
  const userReducerData = useSelector((store) => store.userRed);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(getCategories());
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
  }, [dispatch]);
  if (loading) {
    <Loading />;
  }
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <Homepage />
        </Route>
        <Route exact path="/shop">
          <Shop />
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
        <Route path="/shop/category/:gender/:title">
          <Shop />
        </Route>
        <Route path="/shop/:filter">
          <Shop />
        </Route>
        <Route path="/shop/:sort">
          <Shop />
        </Route>
        <Route path="/:category/:productId/:productNameSlug">
          <Product />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/order">
          <Order />
        </Route>
      </Switch>
    </div>
  );
};
export default Body;
