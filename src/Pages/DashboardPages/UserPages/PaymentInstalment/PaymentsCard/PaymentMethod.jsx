// import { FaRegEdit } from "react-icons/fa";
// import {
//   SiVisa,
//   SiMastercard,
//   SiAmericanexpress,
//   SiPaypal,
// } from "react-icons/si";
// import { Link } from "react-router-dom";

// const PaymentMethods = () => {
//   return (
//     <div className="flex flex-col md:flex-row gap-4 p-4">
//       {/* Sidebar or Placeholder */}
//       <div className="hidden md:block md:w-64 h-screen bg-blue-100"></div>

//       {/* Main Content */}
//       <div className="w-full max-w-xl  p-6">
//         {/* Breadcrumb */}
//         <div className="text-sm breadcrumbs mb-4">
//           <ul className="flex flex-wrap gap-2">
//             <li>Home</li>
//             <li>Account</li>
//             <li className="text-blue-400 underline underline-offset-4 cursor-pointer">
//               Payments and Instalments
//             </li>
//           </ul>
//         </div>
//         {/* Cards Section */}
//         <div>
//           <h2 className="text-lg text-gray-600 font-medium">Cards</h2>
//           <h3 className="text-gray-400 text-xs mb-4">Manage payment methods</h3>

//           {/* Credit or Debit Card */}
//           <div className="flex flex-wrap justify-between items-center p-3 mb-3">
//             <div className="flex-1 relative mb-4 md:mb-0">
//               <div
//                 id="card"
//                 type="text"
//                 placeholder="Credit or Debit cards"
//                 className="rounded-lg p-2 bg-gray-50 text-sm w-full  max-w-xl  h-16 md:h-[72px]"
//               >
//                 <FaRegEdit className="text-blue-400 cursor-pointer absolute right-4 top-1/3" />
//               </div>
//             </div>
//             <div className="flex items-center space-x-3 ml-4">
//               <SiAmericanexpress className="text-blue-600" />
//               <SiMastercard className="text-orange-600" />
//               <SiVisa className="text-blue-500" />
//             </div>
//           </div>

//           {/* PayPal */}
//           <div className="flex flex-wrap justify-between items-center gap-2 rounded-lg p-3 mb-6">
//             <div className="flex-1 relative  mb-4 md:mb-0">
//               <input
//                 id="paypal"
//                 type="email"
//                 placeholder="PayPal Email"
//                 className="rounded-lg p-2 bg-gray-50 text-sm w-full  max-w-xl  h-16 md:h-[72px]"
//               />
//               <FaRegEdit className="text-blue-400 cursor-pointer absolute right-4 top-1/3" />
//             </div>

//             <SiPaypal className="text-blue-600" />
//           </div>
//         </div>

//         {/* Installments Section */}
//         <div>
//           <h2 className="text-lg text-gray-600 font-medium">Instalments</h2>
//           <Link
//             to="/payments/table"
//             className="text-blue-500 text-sm mt-2 inline-block"
//           >
//             Manage your Instalment &rarr;
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentMethods;

import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import {
  SiVisa,
  SiMastercard,
  SiAmericanexpress,
  SiPaypal,
} from "react-icons/si";
import { Link } from "react-router-dom";
import PaymentMethodModal from "./PaymentMethodModal";
import PayPalPaymentModal from "./PaymentModalPaypal";

const PaymentMethods = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPayPalModalOpen, setIsPayPalModalOpen] = useState(false);

  // Functions to toggle  modal
  const openPayPalModal = () => setIsPayPalModalOpen(true);
  const closePayPalModal = () => setIsPayPalModalOpen(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-full max-w-xl p-6">
        {/* Cards Section */}
        <div>
          {/* Breadcrumb */}
          <div className="text-sm breadcrumbs mb-4">
            <ul className="flex flex-wrap gap-2">
              <li>Home</li>
              <li>Account</li>
              <li className="text-blue-400 underline underline-offset-4 cursor-pointer">
                Payments and Instalments
              </li>
            </ul>
          </div>
          <h2 className="text-lg text-gray-600 font-medium">Cards</h2>
          <h3 className="text-gray-400 text-xs mb-4">Manage payment methods</h3>
          {/* Credit or Debit Card */}
          <div
            onClick={openModal}
            className="flex justify-between items-center border border-gray-300 rounded-lg p-3 mb-3"
          >
            <div>
              <p className="text-sm text-gray-700">Credit or Debit cards</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaRegEdit className="text-gray-400 cursor-pointer" />
              <SiAmericanexpress className="text-blue-600" />
              <SiMastercard className="text-orange-600" />
              <SiVisa className="text-blue-500" />
            </div>
          </div>

          <PaymentMethodModal isOpen={isModalOpen} onClose={closeModal} />
          <PayPalPaymentModal
            isOpen={isPayPalModalOpen}
            onClose={closePayPalModal}
          />

          {/* PayPal */}
          <div
            onClick={openPayPalModal}
            className="flex justify-between items-center border border-gray-300 rounded-lg p-3 mb-6"
          >
            <div>
              <p className="text-sm text-gray-700">PayPal</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaRegEdit className="text-gray-400 cursor-pointer" />
              <SiPaypal className="text-blue-600" />
            </div>
          </div>
        </div>

        {/* Installments Section */}
        <div>
          <h2 className="text-sm text-gray-600 font-medium">Instalments</h2>
          <Link
            to="/dashboard/payment-istalment/table"
            className="text-blue-500 text-sm mt-2 inline-block"
          >
            Manage your Instalment &rarr;
          </Link>
        </div>
      </div>
    </>
  );
};

export default PaymentMethods;
