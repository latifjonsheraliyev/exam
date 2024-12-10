import React, { useState, useEffect } from "react";
import {
  FaBox,
  FaCheck,
  FaTruck,
  FaShoppingCart,
  FaCog,
  FaClipboardCheck,
} from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import OrderDetails from "./OrderDetails";
import OrderItemss from "./OrderItemss";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../../../../Components/Shared/LoadingSpiner/LoadingSpinner";
import useAxiosSecure from "../../../../../Components/Hooks/useAxiosSecure/useAxiosSecure";

const OrderStatus = () => {
  const { id } = useParams();
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axiosSecure.get(`/get-payments/${id}`);
        setOrderData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching order data");
        setLoading(false);
      }
    };

    fetchOrderData();
  }, [id, axiosSecure]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!orderData) {
    return <div>No order data found</div>;
  }

  const statusSteps = [
    {
      status: "placed",
      icon: FaShoppingCart,
      label: "Order Placed",
      color: "bg-green-500",
    },
    {
      status: "processing",
      icon: FaCog,
      label: "Processing",
      color: "bg-yellow-500",
    },
    {
      status: "on-the-way",
      icon: FaTruck,
      label: "On the way",
      color: "bg-blue-500",
    },
    {
      status: "quality-check",
      icon: FaClipboardCheck,
      label: "Quality Check",
      color: "bg-purple-500",
    },
    {
      status: "delivered",
      icon: FaBox,
      label: "Delivered",
      color: "bg-indigo-500",
    },
  ];

  const currentStatusIndex = statusSteps.findIndex(
    (step) => step.status === orderData.deliveryStatus
  );

  const getStatusWidth = () => {
    return `${Math.min(
      ((currentStatusIndex + 1) / statusSteps.length) * 100,
      100
    )}%`;
  };

  return (
    <div className="w-full mx-auto p-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Order Status</h2>
        <p className="text-gray-600">Track your order</p>

        <div className="flex items-center justify-between mt-8 relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          {statusSteps.map((step, index) => (
            <div key={step.status} className="z-10">
              <div className="relative">
                <div
                  className={`${
                    index <= currentStatusIndex ? step.color : "bg-gray-300"
                  } w-12 h-12 mx-auto rounded-full text-white flex items-center justify-center shadow-lg transition-all duration-300 ${
                    index <= currentStatusIndex ? "scale-110" : ""
                  }`}
                >
                  <step.icon className="text-xl" />
                </div>
                <p className="text-sm mt-2 font-medium">{step.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-200 h-2 w-full mx-auto mt-8 rounded-full overflow-hidden">
          <div
            className={`h-full ${statusSteps[currentStatusIndex]?.color} transition-all duration-500 ease-out rounded-full`}
            style={{ width: getStatusWidth() }}
          ></div>
        </div>

        <p className="mt-6 text-lg font-semibold text-gray-700">
          {orderData.deliveryStatus === "delivered"
            ? "Your order has been delivered."
            : `Your order is currently ${orderData.deliveryStatus}.`}
        </p>
      </div>

      <div className="mt-10">
        <OrderDetails orderData={orderData} />
      </div>

      <div className="mt-10">
        <h3 className="font-semibold text-xl mb-4">Order Items</h3>
        <OrderItemss items={orderData.cart || []} />
      </div>
    </div>
  );
};

export default OrderStatus;
