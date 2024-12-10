import React, { useState } from "react";
import image1 from "../../../../../assets/Photos/Product-Details/apple.png";
import { Link } from "react-router-dom";

const data = [
  {
    key: "1",
    description: "#8967856",
    image: image1,
    dueAmount: "$543.02",
    dueDate: "2023/08/20",
    actualAmount: "$543.02",
    paymentDate: "2023/08/15",
    status: "Paid",
    total: "$1385.52",
    checked: false,
  },
  {
    key: "2",
    description: "#8967856",
    image: image1,
    dueAmount: "$433.00",
    dueDate: "2023/09/20",
    actualAmount: "-",
    paymentDate: "-",
    status: "On schedule",
    total: "$842.50",
    checked: true,
  },
  {
    key: "3",
    description: "#8967856",
    image: image1,
    dueAmount: "$433.00",
    dueDate: "2023/10/20",
    actualAmount: "-",
    paymentDate: "-",
    status: "On schedule",
    total: "$409.50",
    checked: true,
  },
];

const PaymentTable = () => {
  const [selectedRows, setSelectedRows] = useState(data);

  const handleCheckboxChange = (key, checked) => {
    const updatedRows = selectedRows.map((item) =>
      item.key === key ? { ...item, checked } : item
    );
    setSelectedRows(updatedRows);
  };

  const subtotal = selectedRows
    .filter((item) => item.checked)
    .reduce((acc, item) => acc + parseFloat(item.total.replace("$", "")), 0);

  return (
    <div className="p-6 bg-white w-full">
      {/* Breadcrumb */}
      <div className="text-sm breadcrumbs mb-4">
        <ul className="flex flex-wrap gap-2">
          <li>Home</li>
          <li>Account</li>
          <li>
            <Link to="/dashboard/payment-istalment" className=" cursor-pointer">
              Payment & Instalments
            </Link>
          </li>
          <li className="text-blue-400 underline underline-offset-4">
            Instalment
          </li>
        </ul>
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full mt-4">
          <thead>
            <tr>
              <th></th>
              <th>Description</th>
              <th>Due Amount</th>
              <th className="table-cell">Due Date</th>
              <th className="table-cell">Actual Amount</th>
              <th className="table-cell">Payment Date</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {selectedRows.map((item) => (
              <tr key={item.key}>
                <td>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    checked={item.checked}
                    onChange={(e) =>
                      handleCheckboxChange(item.key, e.target.checked)
                    }
                  />
                </td>
                <td>
                  <div className="flex items-center space-x-2">
                    <img src={item.image} alt="product" className="w-12 h-12" />
                    <span>{item.description}</span>
                  </div>
                </td>
                <td className="text-red-500">{item.dueAmount}</td>
                <td className="table-cell">{item.dueDate}</td>
                <td className="table-cell">{item.actualAmount}</td>
                <td className="table-cell">{item.paymentDate}</td>
                <td>
                  {item.status === "Paid" ? (
                    <span className="badge badge-success">Paid</span>
                  ) : (
                    <span className="badge badge-info py-4 md:py-2">
                      On schedule
                    </span>
                  )}
                </td>
                <td>{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Subtotal and Payment Button */}
      <div className="flex flex-wrap p-4 gap-4">
        <div className="flex justify-between items-center max-w-xs w-full rounded-lg bg-gray-100 mt-4 gap-4 px-4">
          <span className="font-bold text-lg">Subtotal</span>
          <span className="font-semibold text-lg">${subtotal.toFixed(2)}</span>
        </div>
        <div className="mt-4">
          <button className="btn btn-primary w-full px-12">Pay</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentTable;
