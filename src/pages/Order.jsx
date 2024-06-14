import Stepper from "../components/Stepper";
import Summary from "../components/Summary";

const Order = () => {
  return (
    <div className="flex flex-row px-40 gap-4">
      <Stepper />
      <Summary />
    </div>
  );
};
export default Order;
