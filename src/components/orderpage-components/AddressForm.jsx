import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  getCities,
  getDistrictsAndNeighbourhoodsByCityCode,
} from "turkey-neighbourhoods";

const OrderForm = ({ addressFormIsOpen, setAddressFormIsOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm({ mode: "onChange" });
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [cityData, setCityData] = useState([]);
  const [districtData, setDistrictData] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const handleCancelButton = () => {
    setAddressFormIsOpen(!addressFormIsOpen);
  };

  useEffect(() => {
    // Şehir verilerini al
    const cities = getCities();
    setCityData(cities);
  }, []);

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
    /*
    setLoading(true);
    axios
      .post("/signup", formData)
      .then((res) => {
        setLoading(false);
        history.push("/login");
        toast.success(
          `You need to click link in email to activate your account!`
        );
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Form posting has been failed.");
      });
      */
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-2xl py-8">Fill The Address Form</h2>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div className="order-form">
            <label>Address Title</label>
            <input
              type="text"
              placeholder="My Address"
              {...register("addressTitle", {
                required: "You must enter your address' title",
                minLength: {
                  value: 3,
                  message: "Min 3 characters",
                },
              })}
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
            />
            {errors.addressTitle && (
              <p className="text-red" id="address-title-error">
                {errors.addressTitle.message}
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
            <Controller
              name="phone"
              control={control}
              rules={{
                required: "You must enter your phone number",
                minLength: {
                  value: 12,
                  message: "Min 12 characters",
                },
              }}
              render={({ field }) => (
                <PhoneInput
                  country={"tr"}
                  value={field.value}
                  onChange={field.onChange}
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                  containerClass="w-full"
                />
              )}
            />
            {errors.phone && (
              <p className="text-red" id="phone-error">
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
              disabled={!selectedCity}
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
              disabled={!selectedDistrict}
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
            <input
              type="text"
              placeholder="Bergen St. Sean Price Ave. 15/01"
              {...register("address", {
                required: "You must enter address",
                minLength: {
                  value: 3,
                  message: "Min 3 characters",
                },
              })}
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
            />
            {errors.address && (
              <p className="text-red" id="name-error">
                {errors.address.message}
              </p>
            )}
          </div>

          <div className="flex flex-row gap-2 font-bold py-2">
            <button
              type="submit"
              disabled={!isValid}
              className={`${
                isValid
                  ? "bg-blue-500 hover:bg-blue-400 focus:ring-blue-300"
                  : "bg-gray hover:bg-red focus:ring-orange-300 cursor-not-allowed"
              } flex items-center justify-between w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg focus:outline-none focus:ring focus:ring-opacity-50`}
            >
              <span>Save Address</span>
            </button>
            <button
              onClick={handleCancelButton}
              className="bg-red hover:bg-orange-500 focus:ring-orange-300 flex items-center justify-between w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg focus:outline-none focus:ring focus:ring-opacity-50"
            >
              <span>Cancel</span>
            </button>
          </div>

          {!isValid && (
            <p className="text-red mt-2 text-center">Fill the form correctly</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
