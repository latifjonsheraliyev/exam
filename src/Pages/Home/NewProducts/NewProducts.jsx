import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import ProductCards from "./ProductCards";
import { Link } from "react-router-dom";
const NewProducts = () => {
  return (
    <section

      className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <>
        {/* heading */}
        <div className="flex justify-between">
          <h1 className="text-[32px] text-black font-medium">New Products</h1>
          <Link
            to="/shop"
            className="mt-4 sm:mt-0 flex items-center text-base sm:text-lg text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
          >
            View all
            <RiArrowRightSLine className="ml-1 text-lg sm:text-xl" />
          </Link>
        </div>
        {/* Divider */}
        <div class="divider divider-neutral"></div>
        {/* Product Card */}
        <ProductCards />
      </>
    </section>
  );
};

export default NewProducts;
