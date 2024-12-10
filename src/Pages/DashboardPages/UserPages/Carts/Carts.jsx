import React, { useContext, useEffect } from "react";
import MenuShoppingCart from "../../../../Components/MenuShoppingCart/MenuShoppingCart";
import NewProducts from "../../../Home/NewProducts/NewProducts";
import { IoCartSharp } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import CalculatedPrice from "../../../../Components/Shared/Price/CalculatedPrice";
import GrandTotal from "../../../../Components/Shared/Price/GrandTotal";
import useAuth from "../../../../Components/Hooks/useAuth/useAuth";

const Carts = () => {
  const { cartProduct ,fetchCartDetails,user ,shippingCost,setShippingCost} = useAuth();
  const { cart, totalPrice } = cartProduct;
  console.log('carts page 15:' ,  cart,shippingCost)
 

  

  const location = useLocation();
  const isCarsPage = location?.pathname?.includes("carts");
  return (
    <div className="container mx-auto px-5">
      {/* Tabs */}
      <div className="flex justify-center items-center gap-5 my-12">
        <p>
          <IoCartSharp
            className={`w-8 p-1 h-8 text-xl border rounded-full ${
              isCarsPage ? "text-blue-600" : "text-[#9E9E9E]"
            }`}
          />
        </p>
        <div className="divider w-14 divider-neutral"></div>
        <p>
          <TbTruckDelivery className="w-6 h-6" />
        </p>
        <div className="divider w-14 divider-neutral"></div>
        <p>
          <MdOutlinePayment className="w-6 h-6" />
        </p>
      </div>
      {/* Cart Detailes */}
      <div className="lg:flex justify-around gap-10">
        <MenuShoppingCart  />
        {/* Payment Details */}
        <div className="border px-6 py-4 rounded lg:w-[416px] h-[300px] mt-12">
          <h1 className="text-2xl text-black font-normal pb-4">
            Payment Details
          </h1>
          <CalculatedPrice />
          <GrandTotal />
          <div className="w-full">
         <Link to="/checkout">
          <button className="btn  bg-blue-500 hover:bg-blue-600 border-0 text-white w-full">
          Procced to checkout
          </button>
        </Link> 
      </div>
        </div>
      </div>
      {/* Customers viewed  Product*/}
      <div className="flex flex-col justify-around my-12">
        <h1 className="lg:ml-32 mb-6 text-xl text-balance font-medium text-black">
          Customers who viewed items in your browsing history also viewed
        </h1>
        <NewProducts />
      </div>
    </div>
  );
};

export default Carts;
