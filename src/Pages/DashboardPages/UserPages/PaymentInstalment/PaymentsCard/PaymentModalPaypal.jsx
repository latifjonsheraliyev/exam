const PayPalPaymentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="bg-white mx-2 p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Pay with PayPal</h3>
          <button className="text-gray-500" onClick={onClose}>
            &times;
          </button>
        </div>

        {/* PayPal Info */}
        <p className="text-sm text-gray-600 mb-4">
          Use your PayPal account to complete the payment.
        </p>

        {/* PayPal email input */}
        <label className="block mb-2 text-sm font-medium text-gray-700">
          PayPal Email
        </label>
        <input
          type="email"
          className="border border-gray-300 p-2 rounded w-full mb-4"
          placeholder="your-email@example.com"
        />

        {/* Save and Cancel buttons */}
        <div className="flex justify-end space-x-2">
          <button className="btn btn-outline" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-primary">Pay with PayPal</button>
        </div>
      </div>
    </div>
  );
};

export default PayPalPaymentModal;
