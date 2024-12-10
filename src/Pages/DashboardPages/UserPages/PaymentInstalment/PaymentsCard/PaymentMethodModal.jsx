import React, { useState } from "react";
import { FiCreditCard, FiUser, FiCalendar, FiLock } from "react-icons/fi"; // Icons

// Modal component
const PaymentMethodModal = ({ isOpen, onClose }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed  inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white mx-2 p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Add your payment method</h3>
          <button className="text-gray-500" onClick={onClose}>
            &times;
          </button>
        </div>

        {/* Card Info */}
        <p className="text-sm text-gray-600 mb-4">
          Tech Helm accepts major credit and debit cards.
        </p>
        <div className="flex items-center mb-4 space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
            alt="Visa"
            className="h-6"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
            alt="Mastercard"
            className="h-6"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Amex_logo.svg"
            alt="American Express"
            className="h-6"
          />
        </div>

        {/* Card Number */}
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Card number"
            className="input input-bordered w-full pl-10"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <FiCreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Name on Card */}
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Name on card"
            className="input input-bordered w-full pl-10"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />
          <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Expiry Date and CVV */}
        <div className="flex space-x-4 mb-6">
          {/* Expiry Date */}
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Expiration date (MM/YY)"
              className="input input-bordered w-full pl-10"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
            <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          {/* CVV */}
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="CVV"
              className="input input-bordered w-full pl-10"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
            <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-2">
          <button className="btn btn-outline" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={() => alert("Payment method added")}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodModal;
