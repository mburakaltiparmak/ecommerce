/*import "./App.css";*/
import { Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import HomePage from "./Layouts/HomePage";
import { ProductListPages } from "./layouts/ProductListPages";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/ProductList">
          <ProductListPages />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
