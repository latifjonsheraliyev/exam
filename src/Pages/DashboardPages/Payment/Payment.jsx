import React, { useContext, useEffect, useState } from "react";
import { IoCartSharp } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import MenuShoppingCart from "../../../Components/MenuShoppingCart/MenuShoppingCart";
import CalculatedPrice from "../../../Components/Shared/Price/CalculatedPrice";
import GrandTotal from "../../../Components/Shared/Price/GrandTotal";
import useAxiosPublic from "../../../Components/Hooks/useAxiosPublic/useAxiosPublic";
import { ImageDisplayControl } from "@frameright/react-image-display-control";
import paymentImg from "../../../assets/payment/SSLCommerz-Pay.png";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";

const Payment = () => {
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const isCarsPage = location?.pathname?.includes("carts");
  const isCheckoutPage = location?.pathname?.includes("checkout");
  const isPaymentPage = location?.pathname?.includes("payment");

  const { cartProduct, fetchCartDetails, user,finalPrice,setFinalPrice, } = useContext(AuthContext);
  const { cart, totalPrice } = cartProduct;
  const userEmail = user?.email;

  const [loader, setLoader] = useState(false);

  const clearCart = async (userEmail) => {
    try {
      const response = await axiosPublic.post(`/api/cart/clear/${userEmail}`);
      console.log(response.data.message); // Cart cleared successfully
      if (response.data.message == "Cart cleared successfully") {
        fetchCartDetails();
      }
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  const handleCreatePayment = () => {
    setLoader(true);
    const userEmail = user?.email;
    // Basic validation checks

    // 1. Check if the cart is empty
    if (!cart || cart.length === 0) {
      toast.error("Your cart is empty. Please add items to the cart before proceeding.");
      return;
    }

    // 2. Check if totalPrice is a valid number
    if (!totalPrice || isNaN(totalPrice) || totalPrice <= 0) {
      toast.error("Invalid total price. Please check your cart.");
      return;
    }

    // Proceed with payment if validation passes
    axiosPublic
      .post("/create-payment", {
        cart: cart, // Send cart array with product information
        totalPrice: parseFloat(finalPrice), // Send total price
        userName: user.displayName, // Send User Name
        userEmail: user.email, // Send User Email
      })
      .then((res) => {
        console.log("payment page 25:", res);
        const redirectUrl = res.data.paymentUrl;

        //
        if (redirectUrl) {
          window.location.replace(redirectUrl);
          clearCart(userEmail);
        }
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error creating payment:", error);
        toast.error("There was an error processing your payment. Please try again.");
      });
  };

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
          <TbTruckDelivery
            className={`w-8 p-1 h-8 text-xl border rounded-full ${
              isCheckoutPage ? "text-blue-600" : "text-[#9E9E9E]"
            }`}
          />
        </p>
        <div className="divider w-14 divider-neutral"></div>
        <p>
          <MdOutlinePayment
            className={`w-8 p-1 h-8 text-xl border rounded-full ${
              isPaymentPage ? "text-blue-600" : "text-[#9E9E9E]"
            }`}
          />
        </p>
      </div>
      {/* Checkout Form */}
      <div className="lg:flex justify-center gap-5">
        <div className="lg:w-1/2">
          {/* Payment Img */}
          <div className="w-3/4">
            <ImageDisplayControl>
              <img src={paymentImg} className="lg:w-[500px]" />
            </ImageDisplayControl>
          </div>
          <Link to="/checkout" className="flex items-center gap-2 text-blue-500 my-3">
            <FaArrowLeft className="text-sm" />
            Return to Checkout
          </Link>
        </div>
        {/* Orders Info */}
        <div className="border p-6 rounded">
          <h1 className="text-base md:text-2xl text-black font-medium">Your Order</h1>
          {/* Divider */}
          <div className="divider"></div>
          {/* Shopping Carts Item */}
          <MenuShoppingCart />
          {/* Divider */}
          <div className="divider"></div>
          
          {/* Total Price */}
          <CalculatedPrice />
          <GrandTotal />
          <div className="w-full">
            {loader ? (
              <button className="btn  bg-blue-500 hover:bg-blue-600 border-0 text-white w-full">
                <span className="loading loading-dots loading-lg"></span>
              </button>
            ) : (
              <button
                onClick={handleCreatePayment}
                className="btn  bg-blue-500 hover:bg-blue-600 border-0 text-white w-full"
              >
                Continue to pay
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
