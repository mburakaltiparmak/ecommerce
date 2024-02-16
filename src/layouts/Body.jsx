import { Blog } from "../components/Blog";
import { ShopCards } from "../components/ShopCards";
import { ShopCards2 } from "../components/ShopCards2";
const Body = () => {
  return (
    <div id="body-container">
      <ShopCards />
      <ShopCards2 />
      <Blog />
    </div>
  );
};
export default Body;
