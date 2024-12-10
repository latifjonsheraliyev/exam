import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import NavigationBreadcrumb from "../../../../Components/Shared/NavigationBreadcrumb/NavigationBreadcrumb";

const Notification = () => {
  return (
    <div className="flex flex-col justify-start min-h-screen w-full">
      {/* Navigation */}
      <NavigationBreadcrumb></NavigationBreadcrumb>
      {/* Heading */}
      <div className="flex lg:gap-10 gap-3  pl-8">
        <div>
          <p className="text-black text-xl font-medium mb-2">Notification</p>
          <p className="text-balance text-base font-light text-[#717171]">
            Manage your notification settings
          </p>
        </div>
      </div>
      {/* Content */}
      <div className="gird grid-cols-1 md:grid-cols-2">
        {/* col 1 */}
        <div className="flex flex-wrap gap-10">
          {/* Email Col */}
          <div className="flex items-center mt-10 pl-10">
            <div>
              <div className="flex items-center  justify-between ">
                <div className="flex gap-2 items-center">
                  <FaEnvelope />
                  <p className="text-[#0C0C0C] text-base font-medium">Emails</p>
                </div>
                {/* Toogle Btn */}
                <div>
                  <label
                    htmlFor="toogle_1"
                    className="relative flex h-fit w-10 items-center rounded-full border border-blue-600"
                  >
                    <input
                      type="checkbox"
                      className="peer/toggle hidden"
                      id="toogle_1"
                    />
                    <div className="absolute inset-0 z-10 w-0 rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-blue-500"></div>
                    <div className="z-20 size-4 rounded-full bg-blue-600 duration-200 peer-checked/toggle:translate-x-6"></div>
                  </label>
                </div>
              </div>
              <p className="text-[#717171] font-light text-balance text-base mt-2">
                We write emails to let you know <br /> what's important, like:
                new order,
                <br /> confirmations{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center mt-10 pl-10">
            <div>
              <div className="flex items-center  justify-between ">
                <div className="flex gap-2 items-center">
                  <FaEnvelope />
                  <p className="text-[#0C0C0C] text-base font-medium">Emails</p>
                </div>
                {/* Toogle Btn */}
                <div>
                  <label
                    htmlFor="toogle_2"
                    className="relative flex h-fit w-10 items-center rounded-full border border-blue-600"
                  >
                    <input
                      type="checkbox"
                      className="peer/toggle hidden"
                      id="toogle_2"
                    />
                    <div className="absolute inset-0 z-10 w-0 rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-blue-500"></div>
                    <div className="z-20 size-4 rounded-full bg-blue-600 duration-200 peer-checked/toggle:translate-x-6"></div>
                  </label>
                </div>
              </div>
              <p className="text-[#717171] font-light text-balance text-base mt-2">
                We write emails to let you know <br /> what's important, like:
                new order,
                <br /> confirmations{" "}
              </p>
            </div>
          </div>
        </div>
        {/* col 2 */}
        <div className="flex flex-wrap gap-10">
          {/* Email Col */}
          <div className="flex items-center mt-10 pl-10">
            <div>
              <div className="flex items-center  justify-between ">
                <div className="flex gap-2 items-center">
                  <FaEnvelope />
                  <p className="text-[#0C0C0C] text-base font-medium">Emails</p>
                </div>
                {/* Toogle Btn */}
                <div>
                  <label
                    htmlFor="toogle_3"
                    className="relative flex h-fit w-10 items-center rounded-full border border-blue-600"
                  >
                    <input
                      type="checkbox"
                      className="peer/toggle hidden"
                      id="toogle_3"
                    />
                    <div className="absolute inset-0 z-10 w-0 rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-blue-500"></div>
                    <div className="z-20 size-4 rounded-full bg-blue-600 duration-200 peer-checked/toggle:translate-x-6"></div>
                  </label>
                </div>
              </div>
              <p className="text-[#717171] font-light text-balance text-base mt-2">
                We write emails to let you know <br /> what's important, like:
                new order,
                <br /> confirmations{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center mt-10 pl-10">
            <div>
              <div className="flex items-center  justify-between ">
                <div className="flex gap-2 items-center">
                  <FaEnvelope />
                  <p className="text-[#0C0C0C] text-base font-medium">Emails</p>
                </div>
                {/* Toogle Btn */}
                <div>
                  <label
                    htmlFor="toogle_4"
                    className="relative flex h-fit w-10 items-center rounded-full border border-blue-600"
                  >
                    <input
                      type="checkbox"
                      className="peer/toggle hidden"
                      id="toogle_4"
                    />
                    <div className="absolute inset-0 z-10 w-0 rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-blue-500"></div>
                    <div className="z-20 size-4 rounded-full bg-blue-600 duration-200 peer-checked/toggle:translate-x-6"></div>
                  </label>
                </div>
              </div>
              <p className="text-[#717171] font-light text-balance text-base mt-2">
                We write emails to let you know <br /> what's important, like:
                new order,
                <br /> confirmations{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
