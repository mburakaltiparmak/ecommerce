import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
};
export default HomePage;
