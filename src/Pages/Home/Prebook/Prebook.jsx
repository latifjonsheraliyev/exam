import React from "react";
import { ImageDisplayControl } from "@frameright/react-image-display-control";
import phoneSeries from "../../../assets/images/banner/iPhone-series.png";
import playstation from "../../../assets/images/banner/play-station-5.png";
import { Link } from "react-router-dom";
import { fadeIn } from '../../../variants'
import { motion } from 'framer-motion'

const Prebook = () => {
  return (
    <section className="container mx-auto mb-12 my-28 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-6">
        {/* Image One */}
        <motion.div
          variants={fadeIn('right', 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className="relative flex w-full flex-col items-center justify-center  h-[500px]"> {/* Increased fixed height */}
          <img
            src={phoneSeries}
            className="w-full h-full object-cover rounded-lg shadow-lg" // Maintain aspect ratio
            alt="Phone Series"
          />
          <div className="absolute bottom-5 lg:right-2 right-1 transform -translate-x-1/2">
            <Link to="/shop">
              <button className="btn btn-primary bg-[#0C68F4] border-0 text-white px-6 py-2 lg:px-8 lg:py-3 text-sm lg:text-base shadow-lg hover:bg-[#0051bf] transition-colors duration-300">
                Explore More
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Image Two */}
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className="relative  flex flex-col items-center justify-center w-full h-[500px]"> {/* Increased fixed height */}
          <img
            src={playstation}
            className="w-full h-full object-cover rounded-lg shadow-lg" // Maintain aspect ratio
            alt="PlayStation 5"
          />
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
            <Link to="/shop">
              <button className="btn btn-primary bg-[#0C68F4] border-0 text-white px-6 py-2 lg:px-8 lg:py-3 text-sm lg:text-base shadow-lg hover:bg-[#0051bf] transition-colors duration-300">
                Buy Now
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Prebook;
