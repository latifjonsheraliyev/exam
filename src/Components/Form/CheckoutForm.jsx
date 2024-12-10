import  { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEdit } from "react-icons/fa";
import CheckoutFormModal from "../Shared/Modals/CheckoutFormModal";

const CheckoutForm = () => {
  const { user, shippingCost, setShippingCost } = useContext(AuthContext);

  const [selectedOption, setSelectedOption] = useState("ordinary");
  
  useEffect(() => {
    // Update the shipping cost based on the selected option
    if (selectedOption === "ordinary") {
      setShippingCost(5);
    } else if (selectedOption === "regular") {
      setShippingCost(8);
    } else if (selectedOption === "express") {
      setShippingCost(22);
    }
  }, [selectedOption]);
  console.log(shippingCost);
  return (
    <form className="">
      <div className="form-control mb-8">
        <label className="label">
          <span className="label-text text-xl font-medium text-black">User</span>
        </label>
        <input
          type="text"
          placeholder="name"
          defaultValue={user?.displayName}
          className="input input-bordered bg-[#F6F6F6] focus:border-0"
          required
        />
      </div>
      <div className="form-control mb-8">
        <label className="label">
          <span className="label-text text-xl font-medium text-black">Ship to </span>
        </label>
        <div className=" text-sm relative flex flex-row items-center">
          <input
            className="flex bg-[#F6F6F6] w-full rounded-md  input input-bordered focus:border-0"
            placeholder="HubSpot, 25 First Street, Cambridge MA 02141, United States"
            name="shipTo"
            type="text"
            required
          />
          <span onClick={""} className="absolute right-2 cursor-pointer text-blue-500">
            <CheckoutFormModal />
          </span>
        </div>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-xl font-medium text-black">Shiping Method</span>
        </label>
        {/* Radio 1 */}
        <div className="flex flex-col mb-2">
          <div className="flex gap-2 border rounded p-2 bg-[#F6F6F6]">
            <input
              type="radio"
              name="radio-1"
              className="radio radio-primary"
              checked={selectedOption === "ordinary"}
              onChange={() => setSelectedOption("ordinary")}
            />
            <div className="w-full">
              <p>Ordinary Shopping</p>
              {/* Business Day & Price */}
              <div className="flex justify-between ">
                <p className="text-[#505050]">7-30 Business Days</p>
                <p className="text-[#505050]">$5</p>
              </div>
            </div>
          </div>
        </div>
        {/* Radio 2 */}
        <div className="flex flex-col mb-2">
          <div className="flex gap-2 border rounded p-2 bg-[#F6F6F6]">
            <input
              type="radio"
              name="radio-1"
              className="radio radio-primary"
              checked={selectedOption === "regular"}
              onChange={() => setSelectedOption("regular")}
            />
            <div className="w-full">
              <p>Regular Shipping</p>
              {/* Business Day & Price */}
              <div className="flex justify-between ">
                <p className="text-[#505050]">3-14 business days</p>
                <p className="text-[#505050]">$8</p>
              </div>
            </div>
          </div>
        </div>
        {/* Radio 3 */}
        <div className="flex flex-col mb-2">
          <div className="flex gap-2 border rounded p-2 bg-[#F6F6F6]">
            <input
              type="radio"
              name="radio-1"
              className="radio radio-primary"
              checked={selectedOption === "express"}
              onChange={() => setSelectedOption("express")}
            />
            <div className="w-full">
              <p>Express Shipping</p>
              {/* Business Day & Price */}
              <div className="flex justify-between ">
                <p className="text-[#505050]">1-3 business days</p>
                <p className="text-[#505050]">$22</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
