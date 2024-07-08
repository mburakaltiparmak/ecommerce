import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCirclePlus,
  faSquarePen,
  faTrashCan,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteAddress } from "../../store/actions/shoppingCartAction";
const Addresses = ({ addressData }) => {
  const dispatch = useDispatch();
  const handleUpdateAddress = (id) => {
    const addressToUpdate = addressData.find((address) => address.id === id);
    setUpdatingAddressData(addressToUpdate);
    setUpdateAddressForm(true);
    setAddressFormIsOpen(true);
  };

  const handleDeleteAddress = (id) => {
    dispatch(deleteAddress(id));
  };

  const handleSelectAddress = (selectedAddress) => {
    console.log("selected address", selectedAddress);
    setStep1(true);
    if (!step2) setCurrentStep(2);
  };

  return addressData.map((address, index) => (
    <div
      className="bg-white border rounded-xl text-darkblue1 px-8 flex flex-col py-4 w-full"
      key={index}
    >
      <div className="flex flex-col gap-2">
        <span className="address-box">
          <h2>Title:</h2>
          <p className="address-box-light">{address.title}</p>
        </span>
        <hr />
        <span className="address-box">
          <p>Name:</p>
          <p className="address-box-light">{address.name}</p>
        </span>
        <hr />
        <span className="address-box">
          <p>Surname:</p>
          <p className="address-box-light">{address.surname}</p>
        </span>
        <hr />
        <span className="address-box">
          <p>Phone:</p>
          <p className="address-box-light">{address.phone}</p>
        </span>
        <hr />
        <span className="address-box">
          <p>City:</p>
          <p className="address-box-light">{address.city}</p>
        </span>
        <hr />
        <span className="address-box">
          <p>District:</p>
          <p className="address-box-light">{address.district}</p>
        </span>
        <hr />
        <span className="address-box">
          <p>Neighborhood:</p>
          <p className="address-box-light">{address.neighborhood}</p>
        </span>
        <hr />
        <span className="address-box">
          <p>Address:</p>
          <p className="address-box-light">{address.address}</p>
        </span>
        <hr />
      </div>
      <div className="flex flex-row gap-4 py-4 text-white">
        <button
          onClick={() => handleSelectAddress(address)}
          className="border border-darkblue1 p-4 rounded-xl flex flex-row items-center gap-4 font-bold bg-darkblue1 hover:bg-blue1 shadow-md shadow-darkblue1"
        >
          <FontAwesomeIcon className="text-4xl" icon={faCircleCheck} />
          <p className="text-white">Select Address</p>
        </button>
        <button
          onClick={() => handleUpdateAddress(address.id)}
          className="border border-darkblue1 p-4 rounded-xl flex flex-row items-center gap-4 font-bold bg-darkblue1 hover:bg-blue1 shadow-md shadow-darkblue1"
        >
          <FontAwesomeIcon className="text-4xl" icon={faSquarePen} />
          <p className="text-white">Update Address</p>
        </button>
        <button
          onClick={() => handleDeleteAddress(address.id)}
          className="border border-darkblue1 p-4 rounded-xl flex flex-row items-center gap-4 font-bold bg-darkblue1 hover:bg-blue1 shadow-md shadow-darkblue1"
        >
          <FontAwesomeIcon className="text-4xl" icon={faTrashCan} />
          <p className="text-white">Delete Address</p>
        </button>
      </div>
    </div>
  ));
};
export default Addresses;
