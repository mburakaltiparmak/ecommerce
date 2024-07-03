import Slider from "../components/homepage-components/Slider";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../store/actions/productAction";
import Loading from "../components/Loading";
import { ShopCards } from "../components/homepage-components/ShopCards";
import { ShopCards2 } from "../components/homepage-components/ShopCards2";
import { Blog } from "../components/homepage-components/Blog";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();
  if (location.pathname === "/home") {
    useEffect(() => {
      setLoading(true);
      const timeout = setTimeout(() => {
        dispatch(getProducts());

        setLoading(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }, [dispatch, location.pathname]);
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-2">
          <Slider />
          <ShopCards />
          <ShopCards2 />
          <Blog />
        </div>
      )}
    </>
  );
};
export default HomePage;
