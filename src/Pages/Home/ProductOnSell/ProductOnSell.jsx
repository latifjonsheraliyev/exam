import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import ProductOnSellSlider from "./ProductOnSellSlider";
import { Link } from "react-router-dom";

const ProductOnSell = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="h-auto lg:h-[360px] bg-[#063A88] bg-opacity-90 w-full rounded-lg relative">
        {/* Background Img */}
        <div className="productOnSell"></div>
        {/* Content & Slider */}
        <div className="flex flex-col lg:flex-row  items-center  h-full py-2">
          {/* Text */}
          <div className="pl-5 w-full lg:w-1/4">
            <h1 className="text-sm lg:text-2xl font-medium text-white mb-2">
              Products On Sale
            </h1>
            <p className="text-xs lg:text-xl text-white font-light mb-14">
              Shop Now!
            </p>
            <Link to='/shop' className="flex items-center  text-white text-sm lg:text-base font-normal">
              View all
              <RiArrowRightSLine />
            </Link>
          </div>
          {/* Slider */}
          <div className="w-full lg:w-3/4">
            <ProductOnSellSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOnSell;
