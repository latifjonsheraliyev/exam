import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BlogProductDetails from "./blogProductDetails/BlogProductDetails";
import BlogProductCategoryName from "./BlogProductCategory/BlogProductCategoryName";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

const BlogProductDetailsMain = () => {
  const { id } = useParams();
  const [blogTitle, setBlogTitle] = useState("Loading...");

  useEffect(() => {
    // Fetch blog title based on id
    // This is a placeholder. Replace with actual API call
    const fetchBlogTitle = async () => {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setBlogTitle("Latest Tech Trends");
    };

    fetchBlogTitle();
  }, [id]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 my-2"
    >
      <nav className="my-10 flex items-center space-x-2 text-sm md:text-base">
        <Link
          to="/"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          Home
        </Link>
        <FaChevronRight className="text-gray-400" />
        <Link
          to="/blog"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          Blog
        </Link>
        <FaChevronRight className="text-gray-400" />
        <span className="text-blue-500 font-semibold">{blogTitle}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6 max-w-[1200px] my-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="col-span-1 lg:col-span-2 w-full"
        >
          <BlogProductDetails />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="col-span-1 w-full lg:mt-16 md:ml-3"
        >
          <BlogProductCategoryName />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogProductDetailsMain;
