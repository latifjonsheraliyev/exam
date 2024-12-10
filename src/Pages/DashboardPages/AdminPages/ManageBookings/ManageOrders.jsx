import { useEffect, useState } from "react";
import NavigationBreadcrumb from "../../../../Components/Shared/NavigationBreadcrumb/NavigationBreadcrumb";
import useAxiosSecure from "../../../../Components/Hooks/useAxiosSecure/useAxiosSecure";

const ManageOrders = () => {
  const axiosSecure = useAxiosSecure();
  const [orders, setOrders] = useState([]);
  const [deliveryStatus, setDeliveryStatus] = useState({});
  const [error, setError] = useState(null);

  const fetchOrders = async () => {
    try {
      const response = await axiosSecure.get("/api/payments/alluser");
      setOrders(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError("Error fetching orders.");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const groupedOrders = orders?.reduce((acc, order) => {
    order?.userPayment?.forEach((payment) => {
      const date = new Date(payment?.timestamp).toLocaleDateString();
      if (!acc[date]) acc[date] = [];
      acc[date].push(payment);
    });
    return acc;
  }, {});

  const sortedDates = Object.keys(groupedOrders).sort((a, b) => new Date(b) - new Date(a));

  const handleStatusChange = async (paymentId, newStatus) => {
    try {
      const response = await axiosSecure.patch(`/api/payments/${paymentId}`, {
        deliveryStatus: newStatus,
      });
      if (response.data) fetchOrders();
    } catch (error) {
      console.error("Error updating delivery status:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen">
      {/* Breadcrumb navigation */}
      <NavigationBreadcrumb />

      <div className="container mx-auto p-8 bg-white rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Manage Orders</h1>
        <div className="overflow-x-auto">
          {sortedDates.map((date) => (
            <div key={date} className="mb-6">
              {/* Highlighted date */}
              <h2 className="text-2xl font-bold text-purple-600 mb-4 border-b-2 border-purple-300 pb-2">
                {date}
              </h2>

              <table className="min-w-full bg-white shadow-lg rounded-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-600 to-pink-500 text-white">
                    <th className="text-left py-4 px-6 uppercase font-bold text-sm">Customer</th>
                    <th className="text-left py-4 px-6 uppercase font-bold text-sm">Payment Type</th>
                    <th className="text-left py-4 px-6 uppercase font-bold text-sm">Payment Issuer</th>
                    <th className="text-left py-4 px-6 uppercase font-bold text-sm">Payment ID</th>
                    <th className="text-left py-4 px-6 uppercase font-bold text-sm">Amount</th>
                    <th className="text-left py-4 px-6 uppercase font-bold text-sm">Payment Status</th>
                    <th className="text-left py-4 px-6 uppercase font-bold text-sm">Cart</th>
                    <th className="text-left py-4 px-6 uppercase font-bold text-sm">Timestamp</th>
                    <th className="text-left py-4 px-6 uppercase font-bold text-sm">Delivery Status</th>
                  </tr>
                </thead>
                <tbody>
                  {groupedOrders[date].length > 0 ? (
                    groupedOrders[date].map((payment, paymentIndex) => (
                      <tr
                        key={paymentIndex}
                        className={
                          paymentIndex % 2 === 0
                            ? "bg-gray-100 border-b"
                            : "bg-gray-50 border-b hover:bg-gray-200 transition-all duration-300"
                        }
                      >
                        <td className="py-4 px-6 text-sm text-gray-700">
                          {payment.customerName || "N/A"} <br />
                          <span className="text-gray-500">{payment.customerEmail}</span>
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-800">
                          {payment.paymentType || "N/A"}
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-700">
                          {payment.paymentIssuer || "N/A"}
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-700">{payment.paymentId || "N/A"}</td>
                        <td className="py-4 px-6 text-sm text-gray-700">{payment.amount || "N/A"}</td>
                        <td className="py-4 px-6 text-sm text-gray-700">{payment.status || "N/A"}</td>
                        <td className="py-4 px-6 text-sm text-gray-700">
                          {payment.cart && payment.cart.length > 0 ? (
                            <ul className="list-disc ml-4">
                              {payment.cart.map((item, itemIndex) => (
                                <li key={itemIndex} className="font-semibold">
                                  {item.product.name.length > 25
                                    ? item.product.name.slice(0, 25) + "..."
                                    : item.product.name}{" "}
                                  - <span className="font-extrabold">{item.quantity || "N/A"}</span> pcs
                                </li>
                              ))}
                            </ul>
                          ) : (
                            "No items in cart"
                          )}
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-700">
                          {payment.timestamp
                            ? new Date(payment.timestamp).toLocaleString()
                            : "N/A"}
                        </td>
                        <td className="py-4 px-6">
                          <select
                            value={payment?.deliveryStatus || "select"}
                            onChange={(e) => handleStatusChange(payment.paymentId, e.target.value)}
                            className="bg-gray-100 border border-gray-300 text-gray-700 p-2 rounded-md focus:ring-2 focus:ring-purple-400"
                          >
                            <option value="select" disabled>
                              Select Status
                            </option>
                            <option value="processing">Processing</option>
                            <option value="on_the_way">On the way</option>
                            <option value="delivered">Delivered</option>
                          </select>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" className="py-4 px-6 text-center text-gray-500">
                        No orders placed yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          ))}
          {error && <p className="text-red-500 text-center">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
