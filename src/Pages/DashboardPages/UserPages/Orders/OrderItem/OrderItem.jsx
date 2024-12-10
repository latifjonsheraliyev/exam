import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingBag,
  FaCalendarAlt,
  FaDollarSign,
  FaCheckCircle,
  FaSpinner,
  FaUser,
} from "react-icons/fa";

const OrderItem = ({ order, user }) => {
  const {
    paymentId,
    amount,
    customerEmail,
    customerName,
    timestamp,
    status,
    deliveryStatus,
    cart = [],
  } = order;

  const mainProduct = cart[0]?.product || {};
  const { featureImage = [] } = mainProduct;

  return (
    <div className="bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-xl p-8 mb-8 transition-all duration-300 hover:shadow-2xl border border-gray-200">
      <div className="flex flex-col lg:flex-row justify-between items-start md:items-center mb-8">
        <div className="space-y-4 mb-4 md:mb-0">
          <p className="flex items-center text-gray-800 text-lg">
            <FaShoppingBag className="mr-3 text-blue-600" />
            <span className="font-semibold">Order ID:</span>
            <span className="ml-2 text-gray-700 font-mono">{paymentId}</span>
          </p>
          <p className="flex items-center text-gray-800 text-lg">
            <FaCalendarAlt className="mr-3 text-green-600" />
            <span className="font-semibold">Placed on:</span>
            <span className="ml-2 text-gray-700">
              {new Date(timestamp).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </p>
          <p className="flex items-center text-gray-800 text-lg">
            <FaDollarSign className="mr-3 text-yellow-600" />
            <span className="font-semibold">Total:</span>
            <span className="ml-2 text-green-700 font-bold text-xl">
              ${amount.toFixed(2)}
            </span>
          </p>
        </div>
        <div className="relative group">
          <img
            src={user.photoURL}
            alt=""
            className="w-10 h-10 rounded-full border border-blue-500 "
          />
          <div className="absolute right-0 mt-2 hidden group-hover:block bg-white border p-4 rounded-lg shadow-xl w-64 text-gray-700 z-10">
            <div className="flex items-center mb-2">
              <FaUser className="text-blue-500 mr-2" />
              <p className="font-semibold">{customerName || "User"}</p>
            </div>
            <p className="text-sm">{user.email}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center mb-8">
        <span className="font-semibold text-gray-800 mr-3 text-lg">
          Payment Status:
        </span>

        <div className="bg-green-500 rounded-3xl text-white px-4 py-1  ">
          {status}
        </div>
      </div>
      <div className="flex items-center mb-8">
        <span className="font-semibold text-gray-800 mr-3 text-lg">
        Delivery Status:
        </span>

        <div className="bg-green-500 rounded-3xl text-white px-4 py-1  ">
          {deliveryStatus || "Order Placed"}
        </div>
      </div>
      <div className="flex gap-4 flex-wrap">
        {cart.map((cr) => (
          <img className="w-20 h-20" src={cr?.product?.featureImage} alt="" />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to={`/dashboard/order-status/${paymentId}`}
          className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg text-lg font-semibold"
        >
          View Status
        </Link>
      </div>
    </div>
  );
};

export default OrderItem;
