const Shipment = () => {
  return (
    <div className="bg-darkblue1 border rounded-xl text-white px-8 flex flex-col py-4 w-full font-montserrat h-fit">
      <select
        className="text-darkblue1 font-bold h-10 w-full border border-blue1 rounded-md"
        defaultValue="standart"
        id="shipment-dropdown"
      >
        <option disabled value="">
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
