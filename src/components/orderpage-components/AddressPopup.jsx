import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  getCities,
  getDistrictsByCityCode,
  getNeighbourhoodsByCityCodeAndDistrict,
} from "turkey-neighbourhoods";
const AddressPopUp = () => {
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newAddress, setNewAddress] = useState({
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
    address: "",
  });
  const dispatch = useDispatch();
  const cityOptions = useMemo(() => getCities(), []);
  const districtOptions = useMemo(
    () => (newAddress.city ? getDistrictsByCityCode(newAddress.city) : []),
    [newAddress.city]
  );
  const neighborhoodOptions = useMemo(
    () =>
      newAddress.district
        ? getNeighbourhoodsByCityCodeAndDistrict(
            newAddress.city,
            newAddress.district
          )
        : [],
    [newAddress.district]
  );

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setNewAddress((prevState) => ({ ...prevState, [name]: value }));

      if (name === "city") {
        setNewAddress((prevState) => ({
          ...prevState,
          district: "",
          neighborhood: "",
        }));
      } else if (name === "district") {
        setNewAddress((prevState) => ({ ...prevState, neighborhood: "" }));
      }
    },
    [setNewAddress]
  );

  const handleAddNewAddress = useCallback(
    (e) => {
      e.preventDefault();
      if (!newAddress.phone) {
        toast.error("Telefon numarası gerekli.");
        return;
      }

      const formattedAddress = {
        title: newAddress.title,
        name: newAddress.name,
        surname: newAddress.surname,
        phone: newAddress.phone.replace(/^0+/, ""),
        city: newAddress.city,
        district: newAddress.district,
        neighborhood: newAddress.neighborhood,
        address: newAddress.address,
      };
      if (!isValidPhone(newAddress.phone)) {
        toast.error("Telefon numarası tam olarak 10 karakter olmalıdır.");
        return;
      }
      if (!isValidAddress(newAddress.address)) {
        toast.error("Adres en az 3 karakter olmalıdır.");
        return;
      }
      dispatch(addAddressAndUpdateList(formattedAddress));
      setShowAddAddressForm(false);
    },
    [newAddress, dispatch, setShowAddAddressForm]
  );
  return (
    <div>
      <div
        onClick={() => {
          setShowAddAddressForm(true);
          setIsEditing(false);
        }}
        className="mt-8 p-4 bg-white rounded shadow cursor-pointer flex justify-center items-center flex-col"
      >
        <div className="text-3xl">+</div>
        <div className="text-md mt-2">Adres Ekle</div>
      </div>
      {showAddAddressForm && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setShowAddAddressForm(false)}
          ></div>
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-6 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-zinc-400 dark:text-zinc-300"
              onClick={() => setShowAddAddressForm(false)}
            >
              &times;
            </button>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-black-100">
                {isEditing ? "Adresi Düzenle" : "Adres Ekle"}
              </h1>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 mb-6">
              {isEditing ? "Adresi Düzenle" : "Adres Ekle"}
            </p>
            <div className="bg-gradient-to-r from-gray-400 to-blue-400 p-4 rounded-lg mb-6">
              <div className="text-white">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold">MyAddress</span>
                  <span className="flex items-center text-xs font-semibold text-orange-600 bg-gray-200 rounded-full px-2 py-1">
                    <i className="fas fa-phone-alt mr-1"></i>
                    {newAddress.phone || "Phone"}
                  </span>
                </div>
                <div className="text-xl font-semibold tracking-widest mb-4">
                  {newAddress.address || "Adres"}
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>
                    {newAddress.name || "Name"}{" "}
                    {newAddress.surname || "Surname"}
                  </span>
                  <span>
                    {newAddress.city
                      ? `${newAddress.city} / ${newAddress.district} / ${newAddress.neighborhood}`
                      : "Şehir / İlçe / Mahalle"}
                  </span>
                </div>
              </div>
            </div>
            <form
              onSubmit={
                isEditing ? handleSaveEditedAddress : handleAddNewAddress
              }
              className="space-y-4"
            >
              <div>
                <label className="block text-zinc-700 dark:text-zinc-300 mb-1">
                  Ad
                </label>
                <input
                  type="text"
                  name="name"
                  value={newAddress.name}
                  onChange={handleChange}
                  placeholder="Ad"
                  className="w-full border border-zinc-300 dark:border-zinc-600 rounded-lg p-2"
                  maxLength="12"
                />
              </div>
              <div>
                <label className="block text-zinc-700 dark:text-zinc-300 mb-1">
                  Soyad
                </label>
                <input
                  type="text"
                  name="surname"
                  value={newAddress.surname}
                  onChange={handleChange}
                  placeholder="Soyad"
                  className="w-full border border-zinc-300 dark:border-zinc-600 rounded-lg p-2"
                  maxLength="14"
                />
              </div>
              <div>
                <label className="block text-zinc-700 dark:text-zinc-300 mb-1">
                  Telefon
                </label>
                <input
                  type="text"
                  name="phone"
                  value={newAddress.phone}
                  onChange={handleChange}
                  placeholder="Telefon"
                  className="w-full border border-zinc-300 dark:border-zinc-600 rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-zinc-700 dark:text-zinc-300 mb-1">
                  Adres Başlığı
                </label>
                <input
                  type="text"
                  name="title"
                  value={newAddress.title}
                  onChange={handleChange}
                  placeholder="Adres Başlığı"
                  className="w-full border border-zinc-300 dark:border-zinc-600 rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-zinc-700 dark:text-zinc-300 mb-1">
                  Şehir
                </label>
                <select
                  name="city"
                  value={newAddress.city}
                  onChange={handleChange}
                  className="w-full border border-zinc-300 dark:border-zinc-600 rounded-lg p-2"
                >
                  <option value="">Şehir Seçiniz</option>
                  {cityOptions.map((city) => (
                    <option key={city.code} value={city.code}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-zinc-700 dark:text-zinc-300 mb-1">
                  İlçe
                </label>
                <select
                  name="district"
                  value={newAddress.district}
                  onChange={handleChange}
                  className="w-full border border-zinc-300 dark:border-zinc-600 rounded-lg p-2"
                  disabled={!newAddress.city}
                >
                  <option value="">İlçe Seçiniz</option>
                  {districtOptions.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-zinc-700 dark:text-zinc-300 mb-1">
                  Mahalle
                </label>
                <select
                  name="neighborhood"
                  value={newAddress.neighborhood}
                  onChange={handleChange}
                  className="w-full border border-zinc-300 dark:border-zinc-600 rounded-lg p-2"
                  disabled={!newAddress.district}
                >
                  <option value="">Mahalle Seçiniz</option>
                  {neighborhoodOptions.map((neighborhood) => (
                    <option key={neighborhood} value={neighborhood}>
                      {neighborhood}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-zinc-700 dark:text-zinc-300 mb-1">
                  Adres
                </label>
                <textarea
                  name="address"
                  value={newAddress.address}
                  onChange={handleChange}
                  placeholder="Adres"
                  className="w-full border border-zinc-300 dark:border-zinc-600 rounded-lg p-2"
                />
              </div>
              <button
                type="submit"
                className="mt-6 w-full bg-[#2A7CC7] hover:bg-indigo-600 text-white font-bold py-3 text-sm uppercase rounded-lg"
              >
                {isEditing ? "Güncelle" : "Adres Ekle"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default AddressPopUp;
