import React from "react";

const OrderDetails = ({ orderData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
      <div>
        <p className="font-semibold text-gray-600">Order Code</p>
        <p>{orderData?.paymentId || "N/A"}</p>
      </div>
      <div>
        <p className="font-semibold text-gray-600">Placed on</p>
        <p>
          {new Date(orderData?.timestamp || "N/A").toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <div>
        <p className="font-semibold text-gray-600">Sent to</p>
        <p>{orderData?.shippingAddress || "N/A"}</p>
      </div>
      <div>
        <p className="font-semibold text-gray-600">Payment Type</p>
        <p>{orderData?.paymentType || "N/A"}</p>
      </div>
      <div>
        <p className="font-semibold text-gray-600">Transaction ID</p>
        <p>{orderData?.paymentId || "N/A"}</p>
      </div>
      <div>
        <p className="font-semibold text-gray-600">Amount Paid</p>
        <p>{orderData?.amount || "N/A"}</p>
      </div>
    </div>
  );
};

export default OrderDetails;
