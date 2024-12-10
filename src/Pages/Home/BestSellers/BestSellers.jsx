import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import SellersCard from "./SellersCard";
import { Link } from "react-router-dom";

const BestSellers = () => {
  return (
    <section className="container mx-auto px-4  sm:px-6   mb-16">
      <>
        {/* Heading Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mt-8 mb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
            Best Sellers
          </h1>
          <Link
            to="/shop"
            className="mt-4 sm:mt-0 flex items-center text-base sm:text-lg text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
          >
            View all
            <RiArrowRightSLine className="ml-1 text-lg sm:text-xl" />
          </Link>
        </div>

        {/* Custom Divider */}
        <div className="border-b-2 border-black mb-8"></div>

        {/* Sellers Card Section */}
        <SellersCard />
      </>
    </section>
  );
};

export default BestSellers;
