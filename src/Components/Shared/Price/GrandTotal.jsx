import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";

const GrandTotal = ({ props , handleCreatePayment }) => {
  const {finalPrice,setFinalPrice, cartProduct ,fetchCartDetails,user ,shippingCost,setShippingCost,discountAmount, setDiscountAmount} = useAuth();
  const { cart, totalPrice } = cartProduct;
  const location = useLocation();
  const isCheckoutPage = location?.pathname?.includes('checkout');
  
  useEffect(() => {
    // Ensure all values are properly handled as numbers and round the result
    setFinalPrice(Math.round(Number(totalPrice) + Number(shippingCost) - Number(discountAmount)));
  }, [totalPrice, shippingCost, discountAmount]); // Add the correct dependencies
  
  console.log(finalPrice,discountAmount,"divider")
  return (
    <div>
      <div className="divider"></div>
      <div className="flex justify-between mb-6">
        <p className="text-base text-black font-normal">Grand Total</p>
        <p>${finalPrice}</p>
      </div>
      {/* <div className="w-full">
        {!isCheckoutPage? <Link to="/checkout">
          <button className="btn  bg-blue-500 hover:bg-blue-600 border-0 text-white w-full">
            {props}
          </button>
        </Link> : <Link to="/payment">
          <button onClick={handleCreatePayment} className="btn  bg-blue-500 hover:bg-blue-600 border-0 text-white w-full">
            {props}
          </button>
        </Link>}
      </div> */}
    </div>
  );
};

export default GrandTotal;
