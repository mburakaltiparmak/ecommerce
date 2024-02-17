/*import "./App.css";*/
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import HomePage from "./Layouts/HomePage";
import ProductListPages from "./layouts/ProductListPages";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/shop">
          <ProductListPages />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
