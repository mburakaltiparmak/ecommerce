import { Blog } from "../components/Blog";
import { ShopCards } from "../components/ShopCards";
import { ShopCards2 } from "../components/ShopCards2";
import Header from "./Header";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <Header />
        <ShopCards />
        <ShopCards2 />
        <Blog />
      </div>
    </>
  );
};
export default HomePage;
