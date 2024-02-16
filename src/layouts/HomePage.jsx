import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <Slider />
        <Body />
      </div>
    </>
  );
};
export default HomePage;
