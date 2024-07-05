import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
/*import {
  fetchAddresses,
  setAddressAction,
  deleteAddress,
  addAddressAndUpdateList,
  updateAddress,
  createOrder,
  resetCart,
} from "../store/actions/shoppingCartAction";*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

//import PaymentOptions from "./PaymentOptions";
//import { fetchProductById } from "../store/actions/productActions";
import { useHistory } from "react-router-dom";
import AddressPopUp from "./AddressPopup";

const isValidPhone = (phone) => phone.length === 10;
const isValidAddress = (address) => address.length >= 3;

const Stepper = () => {
  const dispatch = useDispatch();

  const [editingAddressId, setEditingAddressId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const {
    addressList,
    totalPrice,
    shippingCost,
    currentAddress,
    payment,
    cartDetails,
  } = useSelector((state) => state.shoppingCart);

  const [isEligibleForFreeShipping, setEligibleForFreeShipping] =
    useState(false);
  const [activeTab, setActiveTab] = useState("addressInfo");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const history = useHistory();
  /*
  useEffect(() => {
    dispatch(fetchAddresses()).catch((error) => {
      console.error("Error fetching addresses:", error);
      toast.error("Failed to fetch addresses. Please try again.");
    });
  }, [dispatch, totalPrice]);
  */

  /*
  const handleDeleteAddress = useCallback(
    (addressId) => {
      if (addressId === selectedAddressId) {
        setSelectedAddressId(null);
        dispatch(setAddressAction({}));
      }
      dispatch(deleteAddress(addressId));
    },
    [selectedAddressId, dispatch, setSelectedAddressId]
  );
*/
  const handleEditAddressClick = (address) => {
    setNewAddress(address);
    setIsEditing(true);
    setShowAddAddressForm(true);
    setEditingAddressId(address.id);
  };

  const handleSaveEditedAddress = async (e) => {
    e.preventDefault();
    if (!isValidPhone(newAddress.phone)) {
      toast.error("Telefon numarası tam olarak 10 karakter olmalıdır.");
      return;
    }
    if (!isValidAddress(newAddress.address)) {
      toast.error("Adres en az 15 karakter olmalıdır.");
      return;
    }
    await dispatch(updateAddress(editingAddressId, newAddress));
    setIsEditing(false);
    setEditingAddressId(null);
    setShowAddAddressForm(false);
    dispatch(fetchAddresses());
  };

  const handleSelectAddress = (selectedId) => {
    setSelectedAddressId(selectedId);
    const selectedAddress = addressList.find(
      (address) => address.id === selectedId
    );
    dispatch(setAddressAction(selectedAddress));
  };

  const paymentTabClassName = `px-10 py-4 ${
    activeTab === "paymentOptions"
      ? "bg-blue-500 text-white"
      : "bg-gray-200 text-gray-800"
  } rounded-tr-lg ${!selectedAddressId ? "cursor-not-allowed opacity-50" : ""}`;

  const handleSaveAndContinue = () => {
    if (!selectedAddressId) {
      toast.error("Lütfen ödeme seçeneklerine geçmeden önce bir adres seçin..");
      return;
    }
    setActiveTab("paymentOptions");
  };

  const handleTabChangeToPayment = (e) => {
    e.preventDefault();
    if (!selectedAddressId) {
      toast.error("Lütfen ödeme seçeneklerine geçmeden önce bir adres seçin.");
      return;
    } else {
      setActiveTab("paymentOptions");
    }
  };

  const handleMouseEnterPaymentTab = () => {
    if (!selectedAddressId) {
      //  toast.info('Ödeme seçeneklerine geçiş yapabilmek için önce bir adres seçmelisiniz.');
    }
  };

  const handleOrderSubmit = async () => {
    if (!selectedAddressId || !payment) {
      toast.error(
        "Please select an address and a payment method before proceeding."
      );
      return;
    }

    if (
      !cartDetails ||
      !cartDetails.products ||
      cartDetails.products.length === 0
    ) {
      toast.error("Ürün detayları yüklenemedi.");
      return;
    }

    setIsSubmitting(true);

    try {
      const productDetails = await Promise.all(
        cartDetails.products.map(async (product) => {
          const productData = await dispatch(
            fetchProductById(product.product_id)
          ).unwrap();
          return {
            ...product,
            detail: productData.description,
          };
        })
      );

      const orderData = {
        address_id: selectedAddressId,
        order_date: new Date().toISOString(),
        card_no: payment.card_no.replace(/\d(?=\d{4})/g, "*"),
        card_name: payment.name_on_card,
        card_expire_month: payment.expire_month,
        card_expire_year: payment.expire_year,
        card_ccv: payment.ccv || payment.cvv,
        price: cartDetails.totalPrice,
        products: productDetails,
      };

      await dispatch(createOrder(orderData));
      toast.success("Order created successfully!");
      dispatch(resetCart());
      setIsSubmitting(false);
      history.push("/previous-orders");
    } catch (error) {
      console.error("Order creation error:", error);
      toast.error("Failed to create order. Please try again.");
      setIsSubmitting(false);
    }
  };

  const renderAddressInfo = () => {
    return (
      <div className="container bg-white-100 py-12 px-14 rounded-lg shadow relative z-20 flex flex-col justify-center">
        <div className="flex items-center mb-8 mt-4">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <img src="https://placehold.co/24x24" alt="check" />
          </div>
          <div className="ml-3">
            <h2 className="text-lg font-semibold dark:white-100">
              Adres Seçimi
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Siparişinizi size güvenle ulaştırabilmemiz adına lütfen adres
              bilgilerinizi eksiksiz giriniz.
            </p>
          </div>
        </div>
        <div className="border-t border-zinc-300 dark:border-zinc-700 my-4"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-12">
          {addressList?.map((address) => (
            <div
              key={address.id}
              className={`mb-4 p-2 border-2 rounded-lg shadow-sm mx-auto w-[85%] lg:w-[90%] ${
                selectedAddressId === address.id ? "selected-card" : ""
              }`}
              onClick={() => handleSelectAddress(address.id)}
            >
              <div className="flex items-center justify-between">
                <input
                  type="radio"
                  name="selectedAddress"
                  className="mr-2"
                  checked={selectedAddressId === address.id}
                  readOnly
                />
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditAddressClick(address)}
                    className="bg-gray-300 hover:bg-[#2A7CC7] text-white font-bold py-0.5 px-1 rounded flex items-center"
                  >
                    <FontAwesomeIcon icon={faEdit} size="xs" />
                  </button>
                  <button
                    onClick={() => handleDeleteAddress(address.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-0.5 px-1 rounded flex items-center"
                  >
                    <FontAwesomeIcon icon={faTrash} size="xs" />
                  </button>
                </div>
              </div>
              <div className="bg-gradient-to-r from-gray-400 to-blue-400 p-4 rounded-lg text-xs mt-2">
                <div className="text-white">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold">{address.title}</span>
                    <span className="flex items-center text-xs font-semibold text-orange-600 bg-gray-200 rounded-full px-2 py-1">
                      <i className="fas fa-phone-alt mr-1"></i>
                      {address.phone}
                    </span>
                  </div>
                  <div className="font-semibold tracking-widest mb-2">
                    {address.address || "Adres Bilgisi Girilmemiş"}
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Şehir: {address.city || "N/A"}</span>
                    <span>İlçe: {address.district || "N/A"}</span>
                    <span>Mahalle: {address.neighborhood || "N/A"}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderPaymentOptions = () => {
    return (
      <div>
        <PaymentOptions />
      </div>
    );
  };

  const renderOrderSummary = () => {
    if (!cartDetails) {
      return <div>Ürün detayları yüklenemedi.</div>;
    }

    const {
      totalPrice = 0,
      shippingCost = 0,
      grandTotal = 0,
      isEligibleForFreeShipping,
    } = cartDetails;

    return (
      <div className="p-4">
        <h1 className="font-semibold text-2xl border-b pb-8">Sipariş Özeti</h1>
        <div className="border-t-2 border-gray-300"></div>
        <div className="mt-10">
          <div className="flex justify-between py-2 text-gray-600">
            <span>Ürün Toplamı</span>
            <span>{totalPrice.toFixed(2)} TL</span>
          </div>
          <div className="flex justify-between py-2 text-gray-600">
            <span>Kargo Toplam</span>
            <span>{shippingCost.toFixed(2)} TL</span>
          </div>
          {isEligibleForFreeShipping && (
            <div className="flex justify-between py-2 text-green-600">
              <span>
                150 TL ve Üzeri <br />
                Kargo Bedava (Satıcı Karşılar)
              </span>
              <span>-{shippingCost.toFixed(2)} TL</span>
            </div>
          )}
          <div className="flex justify-between py-2 text-gray-900 font-bold">
            <span>Toplam</span>
            <span>{grandTotal.toFixed(2)} TL</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container xl mx-auto mt-10 p-6 overflow-x-hidden">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="flex-1 container px-3 bg-white-300">
          <div className="grid grid-cols-2 shadow-md relative -mx-2">
            <div className="flex items-center relative">
              <button
                onClick={() => {
                  if (currentAddress) setActiveTab("addressInfo");
                  else toast.error("Lütfen bir adres seçin.");
                }}
                className={`flex-1 px-10 py-4 ${
                  activeTab === "addressInfo"
                    ? "bg-[#2A7CC7] text-white"
                    : "bg-gray-200 text-gray-800"
                } rounded-tl-lg`}
                aria-label="Adres Bilgileri"
              >
                <div>Adres Bilgileri</div>
                {currentAddress?.id && (
                  <div className="ml-4 inline-block">
                    <div className="text-sm font-semibold">
                      {currentAddress.title}
                    </div>
                    <div className="text-sm">
                      {currentAddress.name} {currentAddress.surname}
                    </div>
                    <div className="text-sm">{currentAddress.address}</div>
                    <div className="text-sm">
                      {currentAddress.city} / {currentAddress.district} /{" "}
                      {currentAddress.neighborhood}
                    </div>
                  </div>
                )}
              </button>
              {currentAddress?.id && (
                <button
                  onClick={() => handleEditAddressClick(currentAddress)}
                  className={`absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center ${
                    activeTab === "addressInfo"
                      ? "text-gray-500 hover:text-[#2A7CC7]"
                      : "text-gray-500"
                  }`}
                >
                  <FontAwesomeIcon icon={faEdit} className="mr-1" />
                  <span>Düzenle</span>
                </button>
              )}
            </div>
            <button
              onClick={handleTabChangeToPayment}
              onMouseEnter={handleMouseEnterPaymentTab}
              className={paymentTabClassName}
            >
              Ödeme Seçenekleri
            </button>
          </div>
          {activeTab === "addressInfo" && renderAddressInfo()}
          {activeTab === "paymentOptions" && renderPaymentOptions()}
        </div>
        <div className="w-1/4 bg-zinc-100 px-8 py-10">
          <div className="h-auto sticky top-20">
            <div className="p-4">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Sipariş Özeti
              </h1>
              <div className="border-t-2 border-gray-300"></div>
              <div className="mt-10">
                <div className="flex justify-between py-2 text-gray-600">
                  <span>Ürün Toplamı</span>
                  <span>{(cartDetails?.totalPrice ?? 0).toFixed(2)} TL</span>
                </div>
                <div className="flex justify-between py-2 text-gray-600">
                  <span>Kargo Toplam</span>
                  <span>{(cartDetails?.shippingCost ?? 0).toFixed(2)} TL</span>
                </div>
                {cartDetails?.isEligibleForFreeShipping && (
                  <div className="flex justify-between py-2 text-green-600">
                    <span>(Satıcı Karşılar)</span>
                    <span>
                      -{(cartDetails?.shippingCost ?? 0).toFixed(2)} TL
                    </span>
                  </div>
                )}
                <div className="flex justify-between py-2 text-gray-900 font-bold">
                  <span>Toplam</span>
                  <span>
                    {(
                      (cartDetails?.totalPrice ?? 0) +
                      (!(cartDetails?.isEligibleForFreeShipping ?? false)
                        ? cartDetails?.shippingCost ?? 0
                        : 0)
                    ).toFixed(2)}{" "}
                    TL
                  </span>
                </div>
              </div>
              <div className="mt-10">
                {activeTab === "paymentOptions" ? (
                  <div>
                    {selectedAddressId && payment ? (
                      <button
                        onClick={handleOrderSubmit}
                        className="bg-[#2A7CC7] hover:bg-indigo-600 text-white font-bold py-3 text-sm uppercase w-full rounded focus:outline-none focus:shadow-outline"
                        disabled={isSubmitting}
                        aria-label="Ödeme Yap"
                      >
                        Ödeme Yap
                      </button>
                    ) : (
                      <button
                        className="bg-gray-500 text-white font-bold py-3 text-sm uppercase w-full rounded cursor-not-allowed"
                        disabled
                      >
                        Ödeme Yap
                      </button>
                    )}
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={handleSaveAndContinue}
                      className="bg-[#2A7CC7] hover:bg-indigo-600 text-white font-bold py-3 text-sm uppercase w-full rounded focus:outline-none focus:shadow-outline"
                    >
                      Kaydet ve Devam Et
                    </button>
                    <button className="bg-white hover:bg-orange-600 text-black font-bold py-3 text-sm uppercase w-full rounded focus:outline-none focus:shadow-outline my-2">
                      Geri Dön
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddressPopUp />
    </div>
  );
};

export default Stepper;
