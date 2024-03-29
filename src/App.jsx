/*import "./App.css";*/
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
import { autoLogin } from "./store/actions/loginAction";
export const queryClient = new QueryClient();
function App() {
  const baseURL = "https://workintech-fe-ecommerce.onrender.com";
  const instance = axios.create({ baseURL });
  const history = useHistory();
  const dispatch = useDispatch();
  const userReducerData = useSelector((store) => store.userRed);
  autoLogin(instance, dispatch);

  return (
    <div id="main" className="w-full">
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </div>
  );
}

export default App;
