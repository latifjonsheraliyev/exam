import React, { useEffect, useState } from "react";
import OrderItem from "../OrderItem/OrderItem";
import errorImg from "../../../../../assets/errorImage.png";
import useAxiosSecure from "../../../../../Components/Hooks/useAxiosSecure/useAxiosSecure";
import useAuth from "../../../../../Components/Hooks/useAuth/useAuth";
import LoadingSpinner from "../../../../../Components/Shared/LoadingSpiner/LoadingSpinner";
import Tabs from "../../../../../Components/Tabs/Tabs";

const OrderHistory = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [paymentData, setPaymentData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedTab, setSelectedTab] = useState("all");
  

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/get-payments?email=${user.email}`)
        .then((response) => {
          setPaymentData(response.data?.userPayment || []);
        })
        .catch((error) => {
          setError("Error fetching payment data");
        });
    }
  }, [user, axiosSecure]);

  if (loading) {
    return <LoadingSpinner />;
  }

  const tabs = [
    { id: "all", label: "All Orders", count: paymentData.length },
    {
      id: "processing",
      label: "Processing",
      count: paymentData.filter(
        (order) => order.deliveryStatus === "processing"
      ).length,
    },
    {
      id: "delivered",
      label: "delivered",
      count: paymentData.filter((order) => order.deliveryStatus === "delivered")
        .length,
    },
    {
      id: "canceled",
      label: "Canceled",
      count: paymentData.filter((order) => order.deliveryStatus === "canceled")
        .length,
    },
  ];

  const filteredOrders =
    selectedTab === "all"
      ? paymentData
      : paymentData.filter((order) => order.deliveryStatus === selectedTab);

  return (
    <div className="p-4 md:p-6 bg-white w-full max-w-7xl mx-auto">
      <div className="mb-6 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Order History
        </h1>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          Track, return, or purchase items
        </p>
      </div>

      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />

      <div className="mt-6">
        {error ? (
          <div className="text-red-500 text-center py-4 bg-red-100 rounded-lg">
            {error}
          </div>
        ) : filteredOrders.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 ">
            {filteredOrders.map((order, index) => (
              <OrderItem key={order._id || index} order={order} user={user} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center text-center py-16 bg-gray-50 rounded-lg">
            <img src={errorImg} alt="Empty Orders" className="w-32 h-32 mb-4" />
            <p className="text-gray-600 text-lg">
              You have not placed any orders yet
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
              Start Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
