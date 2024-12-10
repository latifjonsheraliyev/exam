import React from "react";
import { Link } from "react-router-dom";
import { FcCancel } from "react-icons/fc";

const Cancel = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col md:w-[442px] md:h-[420px] border p-6 rounded text-center shadow">
          <h1 className=" text-center my-5">
            <FcCancel className="text-rose-600 font-medium mx-auto text-7xl p-3 rounded-full shadow-lg" />
          </h1>
          <h2 className="text-4xl mb-8 font-semibold text-rose-600">
            Payment Cancel
          </h2>
          <p className="text-base text-center text-[#505050] mb-6 text-balance">
            Unfortunately we have an issue with your <br /> payment, try again
            later.
          </p>
          {/* Buttons */}
          <div className="flex justify-end mt-5">
            <Link to="/payment">
              <button className="btn bg-blue-500 hover:bg-blue-600 border-0 text-white w-[187px] h-12 text-base">
                Try Again
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
