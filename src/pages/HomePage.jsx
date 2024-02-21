import Body from "../layouts/Body";
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
