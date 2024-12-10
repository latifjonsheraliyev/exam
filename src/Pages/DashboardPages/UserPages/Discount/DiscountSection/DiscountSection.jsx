import React, { useState } from "react";
import { FiEye } from "react-icons/fi"; // Import any icon, like an eye icon for DaisyUI
import { Link } from "react-router-dom";

const DiscountSection = () => {
  const [isHelpVisible, setIsHelpVisible] = useState(false);

  const toggleHelpVisibility = () => {
    setIsHelpVisible(!isHelpVisible);
  };

  return (
    <>
      <div className="p-6  max-w-lg shadow-md rounded-lg">
        {/* Breadcrumb */}
        <div className="text-sm breadcrumbs mb-4">
          <ul className="flex flex-wrap gap-2">
            <li>Home</li>

            <li className="text-blue-400 underline underline-offset-4 cursor-pointer">
              <Link to="/discount">Discount</Link>
            </li>
          </ul>
        </div>
        {/* Title and Description */}
        <h2 className="text-lg font-semibold">Discounts & Voucher</h2>
        <p className="text-sm text-gray-500 mb-4">
          Add discount code to apply a discount in your purchase
        </p>

        {/* Input Field */}
        <div className="relative">
          <input
            type="text"
            placeholder="Enter discount code"
            className="input input-bordered w-full pl-4 pr-12 rounded-md"
          />
          {/* Icon on the right inside the input field */}
          <span className="absolute inset-y-0 right-3 flex items-center">
            <FiEye className="text-blue-500" size={20} />
          </span>
        </div>

        {/* Help Section - Collapsible */}
        <div className="mt-4">
          <button
            className="text-sm text-blue-600 flex items-center"
            onClick={toggleHelpVisibility}
          >
            Where can I find the discount code?
            <span
              className={`ml-1 transform transition-transform ${
                isHelpVisible ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </button>

          {/* Collapsible Help Text */}
          {isHelpVisible && (
            <div className="mt-2 text-sm text-gray-500">
              You can find the discount code in your email receipt or
              promotional messages sent by us.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DiscountSection;
