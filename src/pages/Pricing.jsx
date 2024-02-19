import { Breadcrumb2 } from "../components/Breadcrumb2";
import PricePlans from "../components/PricePlans";
import SwitchButton from "../components/SwitchButton";

const Pricing = () => {
  return (
    <div id="pricing" className="main-class">
      <section id="title" className="section-class flex-col gap-8">
        <h5 className="h5-styles">PRICING</h5>
        <h2 className="h2-styles">Simple Pricing</h2>
        <Breadcrumb2 />
      </section>
      <section
        id="pricing-type"
        className="section-class flex-col gap-16 bg-lightgray"
      >
        <span
          id="text-span"
          className="flex flex-col gap-5 items-center text-center"
        >
          <h3 className="h3-styles">Pricing</h3>
          <p className="p-styles w-1/2">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <span
            id="switch-button"
            className="flex flex-row gap-3 text-center items-center"
          >
            <h4 className="h4-styles">Monthly</h4>
            <SwitchButton />
            <h4 className="h4-styles">Yearly</h4>
            <button className="border border-blue2 bg-blue2 text-blue1 rounded-2xl text-sm py-1 px-2 ">
              Save 25%
            </button>
          </span>
        </span>
        <span
          id="box-span"
          className="flex flex-row w-full items-center justify-center"
        >
          <span
            id="box-1"
            className="border border-blue1 text-center font-bold items-center rounded-lg flex flex-col w-full gap-5"
          >
            <h3 className="h3-styles">FREE</h3>
            <p className="p-styles">Organize across al apps by hand</p>
            <span className="flex flex-row text-blue1 gap-2 items-center">
              <h3 className="text-3xl">0</h3>
              <span className="flex flex-col items-start gap-2">
                <h5 className="text-base">$</h5>
                <p>Per Month</p>
              </span>
            </span>
            <span id="tick-rows"></span>
          </span>
          <span id="box-2"></span>
          <span id="box-3"></span>
        </span>
      </section>
      <section id="compaines"></section>
      <section id="FAQ"></section>
      <section id="trial"></section>
    </div>
  );
};
export default Pricing;
