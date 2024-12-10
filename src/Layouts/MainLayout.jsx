import React, { useEffect } from "react";
import Navbar from "../Components/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import useAuth from "../Components/Hooks/useAuth/useAuth";

const MainLayout = () => {
  const { user, wistList, fetchWishList, cartProduct, cartProductID, fetchCartDetails } = useAuth();
  const userEmail = user?.email;
  useEffect(() => {
    if (userEmail) {
      fetchCartDetails();
    }
  }, [userEmail]);
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />

    </>
  );
};

export default MainLayout;
