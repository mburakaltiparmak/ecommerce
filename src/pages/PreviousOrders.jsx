import axios from "axios";
import { useEffect, useState } from "react";

const PreviousOrders = () => {
  const token = localStorage.getItem("token");
  const baseURL = "https://workintech-fe-ecommerce.onrender.com";
  const instance = axios.create({ baseURL });
  const [orderHistory, setOrderHistory] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await instance.get("/order", {
        headers: {
          Authorization: token,
        },
      });
      console.log("get orders response", res.data);
      setOrderHistory(res.data);
    } catch (error) {
      console.error("Error fetching orders", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="flex flex-col gap-4 px-32 font-Montserrat">
      <span className="text-center font-bold text-2xl text-darkblue1">
        ORDER HISTORY
      </span>
      <div className="flex flex-col gap-4">
        {orderHistory.length > 0 ? (
          orderHistory.map((order, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 border-2 border-darkblue1 rounded-lg p-4"
            >
              <div className="flex flex-row gap-2 font-bold">
                Order ID: <span className="font-semibold">{order.id}</span>
              </div>
              <div className="flex flex-row gap-2 font-bold">
                Order Date:{" "}
                <span className="font-semibold">{order.order_date}</span>
              </div>

              {order.products.length > 0 ? (
                order.products.map((product, productIndex) => (
                  <div
                    key={productIndex}
                    className="flex flex-row gap-4 border-2 border-darkblue1 rounded-lg"
                  >
                    <img
                      className="w-32 h-fit rounded-lg object-cover shadow-lg shadow-darkblue1"
                      src={product.images[0].url}
                      alt={product.name || "Product Image"}
                    />
                    <div className="flex flex-col gap-2 py-2">
                      <div className="flex flex-row gap-2 font-bold">
                        Product Name:
                        <span className="font-semibold">{product.name}</span>
                      </div>
                      <div className="flex flex-row gap-2 font-bold">
                        Description:
                        <span className="font-semibold">
                          {product.description}
                        </span>
                      </div>
                      <div className="flex flex-row gap-2 font-bold">
                        Product Count:
                        <span className="font-semibold">{product.count}</span>
                      </div>
                      <div className="flex flex-row gap-2 font-bold">
                        Product Price:
                        <span className="font-semibold">{product.price}$</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div></div>
              )}

              <div>
                <span className="flex flex-row gap-2 font-bold">
                  Order Total :<p className="font-semibold">{order.price} $</p>
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center text-3xl font-semibold text-red animate-blink p-4">
            <p>No orders found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreviousOrders;
