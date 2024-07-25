import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  getCities,
  getDistrictsAndNeighbourhoodsByCityCode,
} from "turkey-neighbourhoods";
import Loading from "../Loading";
import { useDispatch, useSelector } from "react-redux";
import { loadingSetter } from "../../store/actions/globalAction";

const OrderForm = ({
  addressFormIsOpen,
  setAddressFormIsOpen,
  addressData,
  updateAddressForm,
  setUpdateAddressForm,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
    setValue,
  } = useForm({ mode: "onChange" });
  const baseURL = "https://workintech-fe-ecommerce.onrender.com";
  const instance = axios.create({ baseURL });
  const loading = useSelector((store) => store.global.loading);
  const dispatch = useDispatch();
  const history = useHistory();
  const [cityData, setCityData] = useState([]);
  const [districtData, setDistrictData] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const token = localStorage.getItem("token");
  dispatch(loadingSetter(false));
  const handleCancelButton = () => {
    setAddressFormIsOpen(!addressFormIsOpen);
  };

  useEffect(() => {
    // Şehir verilerini al
    const cities = getCities();
    setCityData(cities);

    // Update form için gerekli verileri set et
    if (updateAddressForm && addressData) {
      setValue("title", addressData.title);
      setValue("name", addressData.name);
      setValue("surname", addressData.surname);
      setValue("phone", addressData.phone);
      setValue("city", addressData.city);
      setValue("district", addressData.district);
      setValue("neighborhood", addressData.neighborhood);
      setValue("address", addressData.address);
      onCityChange({ target: { value: addressData.city } });
      onDistrictChange({ target: { value: addressData.district } });
    }
  }, [updateAddressForm, addressData, setValue]);

  const onCityChange = (e) => {
    const selectedCityCode = e.target.value;
    setSelectedCity(selectedCityCode);
    const districts = getDistrictsAndNeighbourhoodsByCityCode(selectedCityCode);
    const districtsArray = Object.keys(districts).map((key) => [
      key,
      districts[key],
    ]);
    setDistrictData(districtsArray || []);
    setSelectedDistrict(""); // İlçe seçimi değiştiğinde mahalle seçimini sıfırla
  };

  const onDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const onSubmit = (formData) => {
    dispatch(loadingSetter(true));
    if (token) {
      instance
        .post("/user/address", formData, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          dispatch(loadingSetter(false));
          console.log("address form response", res.data);
          toast.success(`Your address successfully saved!`);
          setAddressFormIsOpen(false);
          history.push("/order");
          window.location.reload();
        })
        .catch((err) => {
          console.error("Form post edilirken hata oluştu", err);
          dispatch(loadingSetter(false));
          toast.error("Form posting has been failed.");
        });
    } else {
      toast.info("Please login for this process!");
      history.push("/login");
    }
  };

  const updateAddress = (formData) => {
    dispatch(loadingSetter(true));
    console.log("update form", formData);
    console.log("id", addressData.id);
    instance
      .put(`/user/address/${addressData.id}`, formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        dispatch(loadingSetter(false));
        console.log("updated address form response", res.data);
        toast.success(`Your address successfully updated!`);
        setUpdateDataAddressForm(!updateAddressForm);
        history.push("/order");
        window.location.reload();
      })
      .catch((err) => {
        console.error("Form post edilirken hata oluştu", err);
        dispatch(loadingSetter(false));
        toast.error("Form posting has been failed.");
      });
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center pb-4">
          <h2 className="font-bold text-2xl md:text-lg md:text-center py-8 ">Fill The Address Form</h2>
          <form
            className="flex flex-col w-[450px] md:w-fit"
            onSubmit={handleSubmit(
              updateAddressForm ? updateAddress : onSubmit
            )}
          >
            <div className="order-form">
              <label>Address Title</label>
              <input
                type="text"
                placeholder="My Address"
                {...register("title", {
                  required: "You must enter your address' title",
                  minLength: {
                    value: 3,
                    message: "Min 3 characters",
                  },
                })}
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
              />
              {errors.title && (
                <p className="text-red" id="address-title-error">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div className="order-form">
              <label>Name</label>
              <input
                placeholder="John"
                type="text"
                {...register("name", {
                  required: "You must enter name",
                  minLength: {
                    value: 3,
                    message: "Min 3 characters",
                  },
                })}
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
              />
              {errors.name && (
                <p className="text-red" id="name-error">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="order-form">
              <label>Surname</label>
              <input
                type="text"
                placeholder="Doe"
                {...register("surname", {
                  required: "You must enter surname",
                  minLength: {
                    value: 3,
                    message: "Min 3 characters",
                  },
                })}
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
              />
              {errors.surname && (
                <p className="text-red" id="surname-error">
                  {errors.surname.message}
                </p>
              )}
            </div>

            <div className="order-form">
              <label>Phone</label>
              <input
                type="phone"
                placeholder="05123456789"
                {...register("phone", {
                  required: "You must enter phone number",
                  minLength: {
                    value: 11,
                    message: "Min 11 characters",
                  },
                })}
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
              />
              {errors.phone && (
                <p className="text-red" id="surname-error">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="order-form">
              <label>City</label>
              <select
                {...register("city", { required: "You must select a city" })}
                onChange={onCityChange}
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
              >
                <option value="">Select a city</option>
                {cityData.map((city, index) => (
                  <option key={index} value={city.code}>
                    {city.name}
                  </option>
                ))}
              </select>
              {errors.city && (
                <p className="text-red" id="city-error">
                  {errors.city.message}
                </p>
              )}
            </div>

            <div className="order-form">
              <label>District</label>
              <select
                {...register("district", {
                  required: "You must select a district",
                })}
                onChange={onDistrictChange}
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
              >
                <option value="">Select a district</option>
                {districtData.map((district, index) => (
                  <option key={index} value={district[0]}>
                    {district[0]}
                  </option>
                ))}
              </select>
              {errors.district && (
                <p className="text-red" id="district-error">
                  {errors.district.message}
                </p>
              )}
            </div>

            <div className="order-form">
              <label>Neighborhood</label>
              <select
                {...register("neighborhood", {
                  required: "You must select a neighborhood",
                })}
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
              >
                <option value="">Select a neighborhood</option>
                {selectedDistrict &&
                  districtData
                    .find((district) => district[0] === selectedDistrict)[1]
                    .map((neighborhood, index) => (
                      <option key={index} value={neighborhood}>
                        {neighborhood}
                      </option>
                    ))}
              </select>
              {errors.neighborhood && (
                <p className="text-red" id="neighborhood-error">
                  {errors.neighborhood.message}
                </p>
              )}
            </div>

            <div className="order-form">
              <label>Address</label>
              <textarea
                placeholder="My address"
                {...register("address", {
                  required: "You must enter your address",
                  minLength: {
                    value: 3,
                    message: "Min 3 characters",
                  },
                })}
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
              />
              {errors.address && (
                <p className="text-red" id="address-error">
                  {errors.address.message}
                </p>
              )}
            </div>

            <div className="flex justify-around mt-4 text-white gap-2 md:px-2 ">
              <button
                className=" bg-red  hover:bg-orange-500 focus:ring-orange-300 flex items-center justify-center w-full px-6 py-3 md:px-2 mt-4 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg focus:outline-none focus:ring focus:ring-opacity-50"
                type="button"
                onClick={handleCancelButton}
              >
                Cancel
              </button>
              <button
                className={`${
                  isValid
                    ? "bg-blue-500 hover:bg-blue-400 focus:ring-blue-300"
                    : "bg-gray hover:bg-red focus:ring-orange-300 cursor-not-allowed"
                } flex items-center justify-center w-full px-6 py-3 md:px-2  mt-4 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg focus:outline-none focus:ring focus:ring-opacity-50`}
                type="submit"
              >
                {updateAddressForm ? "Update Address" : "Save Address"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
