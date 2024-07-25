import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCirclePlus,
  faSquarePen,
  faTrashCan,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { setAddressId } from "../../store/actions/orderAction";

const Addresses = ({
  addressData,
  setAddressData,
  step1,
  setStep1,
  step2,
  currentStep,
  setCurrentStep,
  selectedAddress,
  setSelectedAddress,
}) => {
  const dispatch = useDispatch();
  const [addressFormIsOpen, setAddressFormIsOpen] = useState(false);
  const [updateAddressForm, setUpdateAddressForm] = useState(false);
  const [updatingAddressData, setUpdatingAddressData] = useState(null);
  const baseURL = "https://workintech-fe-ecommerce.onrender.com";
  const token = localStorage.getItem("token");
  const instance = axios.create({ baseURL });

  const handleAddAddress = () => {
    setAddressFormIsOpen(!addressFormIsOpen);
    setUpdateAddressForm(false); // Reset update form state
    setUpdatingAddressData(null); // Reset updating address data
  };

  const handleUpdateAddress = (id) => {
    const addressToUpdate = addressData.find((address) => address.id === id);
    setUpdatingAddressData(addressToUpdate);
    setUpdateAddressForm(true);
    setAddressFormIsOpen(true);
  };

  const deleteAddress = (id) => {
    instance
      .delete(`/user/address/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log("adres silindi", res.data);
        setAddressData((prevAddressData) =>
          prevAddressData.filter((address) => address.id !== id)
        );
        window.location.reload();
      })
      .catch((err) => {
        console.error("adres silinemedi", err);
      });
  };

  const handleDeleteAddress = (id) => {
    deleteAddress(id);
  };

  const handleSelectAddress = (address) => {
    console.log("selected address", address);
    setStep1(true);
    setSelectedAddress(address);
    dispatch(setAddressId(address.id));

    if (!step2) setCurrentStep(2);
  };

  return addressData ? (
    addressData.map((address, index) => (
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
            onClick={handleAddAddress}
            className="address-button"
          >
            <FontAwesomeIcon className="text-4xl md:text-2xl" icon={faCirclePlus} />
            <p className="text-white md:text-sm ">Add</p>
          </button>
          <button
            onClick={() => handleSelectAddress(address)}
            className="address-button"
          >
            <FontAwesomeIcon className="text-4xl md:text-2xl" icon={faCircleCheck} />
            <p className="text-white md:text-sm">Select</p>
          </button>
          <button
            onClick={() => handleUpdateAddress(address.id)}
            className="address-button"
          >
            <FontAwesomeIcon className="text-4xl md:text-2xl" icon={faSquarePen} />
            <p className="text-white md:text-sm">Update</p>
          </button>
          <button
            onClick={() => handleDeleteAddress(address.id)}
            className="address-button"
          >
            <FontAwesomeIcon className="text-4xl md:text-2xl" icon={faTrashCan} />
            <p className="text-white md:text-sm">Delete</p>
          </button>
        </div>
      </div>
    ))
  ) : (
    <div className="flex flex-col w-full">
      <button
        onClick={handleAddAddress}
        className="border border-darkblue1 p-4 rounded-xl flex flex-row gap-2 items-center font-bold bg-darkblue1 hover:bg-blue1 text-white shadow-md shadow-darkblue1"
      >
        <FontAwesomeIcon className="text-4xl" icon={faCirclePlus} />
        <p className="text-white">Add Address</p>
      </button>
    </div>
  );
};

export default Addresses;
