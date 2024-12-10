import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome, FaChevronRight } from "react-icons/fa";
import BlogCard from "./BlogCard";
import RecentPost from "./RecentPost";
import VideoCard from "./Videos/VideoCard";

const BlogsMain = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 my-8"
    >
      <nav className="my-6 flex items-center space-x-2 text-sm md:text-base">
        <Link
          to="/"
          className="flex items-center hover:text-blue-500 transition-colors duration-300"
        >
          <FaHome className="mr-1" />
          Home
        </Link>
        <FaChevronRight className="text-gray-400" />
        <span className="text-blue-500 font-semibold">Blog</span>
      </nav>

      {/* Main grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-8 max-w-[1200px] mx-auto my-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="col-span-1 lg:col-span-2 w-full"
        >
          <div className="space-y-12">
            <BlogCard />
            <RecentPost />
          </div>
        </motion.div>
        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="col-span-1"
        >
          <VideoCard />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="my-8"
      ></motion.div>
    </motion.div>
  );
};

export default BlogsMain;
