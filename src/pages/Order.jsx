import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCirclePlus,
  faPlus,
  faSquarePen,
} from "@fortawesome/free-solid-svg-icons";
import {
  IsChecked,
  clearCart,
  removeFromCart,
  updateCart,
} from "../store/actions/shoppingCartAction";
import Stepper from "../components/orderpage-components/Stepper";
import AddressPopup from "../components/orderpage-components/AddressPopup";
import Stepper2 from "../components/orderpage-components/Stepper2";
import "../App.css";
import Summary from "../components/Summary";
import AddressForm from "../components/orderpage-components/AddressForm";
import axios from "axios";

const Order = () => {
  const [addressFormIsOpen, setAddressFormIsOpen] = useState(false);
  const [addressData, setAddressData] = useState([]);
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

  const handleDeleteAddress = (id) => {
    deleteAddress(id);
  };

  const getAddress = () => {
    instance
      .get("/user/address", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log("gelen adres", res.data);
        setAddressData(res.data);
      })
      .catch((err) => {
        console.error("adres gelmedi", err);
      });
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

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <div className="flex flex-col px-40 gap-4">
      <Stepper2 />
      <div>
        {addressFormIsOpen || updateAddressForm ? (
          <span className="flex flex-row justify-between">
            <div className="block border rounded-lg px-32">
              <AddressForm
                addressData={updatingAddressData}
                addressFormIsOpen={addressFormIsOpen}
                setAddressFormIsOpen={setAddressFormIsOpen}
                updateAddressForm={updateAddressForm}
                setUpdateAddressForm={setUpdateAddressForm}
              />
            </div>
            <Summary />
          </span>
        ) : (
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <button
                onClick={handleAddAddress}
                className="border p-6 rounded-xl flex flex-row items-center font-bold bg-darkblue1 hover:bg-green"
              >
                <FontAwesomeIcon
                  className="text-4xl text-blue1"
                  icon={faCirclePlus}
                />
                <p className="text-white">Add Address</p>
              </button>
            </div>
            <div className="border rounded-xl flex items-center px-8 py-8 bg-darkblue1 text-white font-bold">
              <section className="block px-32">
                {Array.isArray(addressData) && addressData.length > 0 ? (
                  addressData.map((address, index) => (
                    <div
                      className="bg-white border rounded-xl text-darkblue1 px-8 flex flex-col py-4"
                      key={index}
                    >
                      <div className="flex flex-col gap-2">
                        <span className="address-box">
                          <h2>Title:</h2>
                          <p className="address-box-light">{address.title}</p>
                        </span>
                        <hr />
                        <span className="address-box">
                          <p>Name:</p>{" "}
                          <p className="address-box-light">{address.name}</p>
                        </span>
                        <hr />
                        <span className="address-box">
                          <p>Surname:</p>{" "}
                          <p className="address-box-light">{address.surname}</p>
                        </span>
                        <hr />
                        <span className="address-box">
                          <p>Phone:</p>{" "}
                          <p className="address-box-light">{address.phone}</p>
                        </span>
                        <hr />
                        <span className="address-box">
                          <p>City:</p>{" "}
                          <p className="address-box-light">{address.city}</p>
                        </span>
                        <hr />
                        <span className="address-box">
                          <p>District:</p>{" "}
                          <p className="address-box-light">
                            {address.district}
                          </p>
                        </span>
                        <hr />
                        <span className="address-box">
                          <p>Neighborhood:</p>{" "}
                          <p className="address-box-light">
                            {address.neighborhood}
                          </p>
                        </span>
                        <hr />
                        <span className="address-box">
                          <p>Address:</p>{" "}
                          <p className="address-box-light">{address.address}</p>
                        </span>
                        <hr />
                      </div>
                      <div className="flex flex-row gap-4 py-4">
                        <button
                          onClick={() => handleUpdateAddress(address.id)}
                          className="border p-4 rounded-xl flex flex-row items-center gap-4 font-bold bg-darkblue1 hover:bg-green"
                        >
                          <FontAwesomeIcon
                            className="text-4xl text-blue1"
                            icon={faSquarePen}
                          />
                          <p className="text-white">Update Address</p>
                        </button>
                        <button
                          onClick={() => handleDeleteAddress(address.id)}
                          className="border p-4 rounded-xl flex flex-row items-center gap-4 font-bold bg-darkblue1 hover:bg-green"
                        >
                          <FontAwesomeIcon
                            className="text-4xl text-blue1"
                            icon={faSquarePen}
                          />
                          <p className="text-white">Delete Address</p>
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No addresses found.</p>
                )}
              </section>
            </div>
            <Summary />
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
