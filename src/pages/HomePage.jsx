import Header from "../layouts/Header";
import Body from "../layouts/Body";
import Footer from "../layouts/Footer";
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
