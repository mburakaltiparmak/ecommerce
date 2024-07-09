import { useDispatch } from "react-redux";
import { selectShipment } from "../../store/actions/shoppingCartAction";

const Shipment = ({step2,setStep2}) => {
  const dispatch = useDispatch();
  const handleShipmentSelect = (shipment) => {
    console.log("shipment",shipment);
    dispatch(selectShipment(shipment));
    setStep2(true);
  }
  return (
    <div className="bg-darkblue1 border rounded-xl text-white px-8 flex flex-col py-4 w-full font-montserrat h-fit">
      <select
        className="text-darkblue1 font-bold h-10 w-full border border-blue1 rounded-md"
        id="shipment-dropdown"
        onChange={(e) => handleShipmentSelect(e.target.value)}
        defaultValue="null" // Set default value
      >
        <option disabled value="null">
          Select Shipment Method
        </option>
        <option value="standart">Standart Shipment : 29.99$</option>
        <option value="urgent">Urgent Shipment : 50.00$</option>
        <option value="special">Special Shipment : 75.00$</option>
      </select>
    </div>
  );
};
export default Shipment;
