import React from "react";
import NavigationBreadcrumb from "../../../../Components/Shared/NavigationBreadcrumb/NavigationBreadcrumb";
import { FaPhone } from "react-icons/fa";
import SecurityAccessModal from "./SecurityAccessModal";

const SecurityAccess = () => {
  return (
    <div className="flex flex-col justify-start min-h-screen w-full">
        {/* Navigation */}
        <NavigationBreadcrumb></NavigationBreadcrumb>
      {/* Heading */}
      <div className="flex lg:gap-10 gap-3  pl-8">
        <div>
          <p className="text-black text-xl font-medium mb-2">
            Security settings
          </p>
          <p className="text-balance text-base font-light text-[#717171]">
            Change password and phone number
          </p>
        </div>
        <div className="w-6">
          <SecurityAccessModal />
        </div>
      </div>
      {/* Form */}
      <div className="md:flex gap-10 space-y-5 md:space-y-0 lg:pl-8 px-5 pt-6">
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input type="password" className="grow" placeholder="Password" />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <FaPhone className="text-[#717171]" />
          <input type="number" className="grow" placeholder="Phone Number" />
        </label>
      </div>
    </div>
  );
};

export default SecurityAccess;
