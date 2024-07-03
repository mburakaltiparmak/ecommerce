import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Body from "./layouts/Body";
import "./App.css";

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
