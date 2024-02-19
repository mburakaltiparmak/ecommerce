/*import "./App.css";*/
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import HomePage from "./pages/HomePage";
import ProductListPages from "./pages/ProductListPages";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import { useLocation } from "react-router-dom";
import "./App.css";
function App() {
  const { pathname } = useLocation();
  return (
    <div className="main">
      <Header />
      <Switch>
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
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
