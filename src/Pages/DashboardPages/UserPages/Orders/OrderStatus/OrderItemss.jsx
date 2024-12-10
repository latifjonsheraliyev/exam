import React from "react";

const OrderItemss = ({ items }) => {
  console.log(items);
  return (
    <div className="space-y-4">
      {items?.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
        >
          <img
            src={item?.product?.featureImage}
            alt={item?.product?.name}
            className="w-16 h-16 object-cover rounded-md"
          />
          <div className="flex-grow ml-4">
            <p className="font-semibold text-lg">{item?.product?.name}</p>
            <p className="text-gray-600">Color: {item?.product?.color}</p>
            <p className="text-sm text-gray-500">Quantity: {item?.quantity}</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-lg">
              ${item.product?.sellPrice || item.product?.regularPrice || "N/A"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderItemss;
