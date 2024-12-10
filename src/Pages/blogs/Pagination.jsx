import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure/useAxiosSecure";
import { toast } from "react-toastify";
import LoadingSpinner from "../../Components/Shared/LoadingSpiner/LoadingSpinner";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  const fetchBlogs = async (page) => {
    try {
      setLoading(true);
      const res = await axiosSecure.get(`/blogs/list?page=${page}`);
      setBlogs(res.data.blogs);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(currentPage);
  }, [currentPage, axiosSecure]);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center space-y-8 my-8"
    >
      {/* Display blogs here */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-600">{blog.description.substring(0, 100)}...</p>
          </div>
        ))}
      </div> */}

      {/* Pagination controls */}
      <div className="flex items-center justify-center space-x-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-500 hover:text-black transition-colors duration-300"
          disabled={currentPage === 1}
          onClick={() => handlePageClick(currentPage - 1)}
        >
          <span className="text-2xl">{"❮"}</span>
        </motion.button>

        <AnimatePresence>
          {pageNumbers.map((number) => (
            <motion.button
              key={number}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handlePageClick(number)}
              className={`text-xl px-4 py-2 rounded-full ${
                currentPage === number
                  ? "bg-blue-500 text-white"
                  : "text-gray-500 hover:bg-gray-200"
              } transition-all duration-300`}
            >
              {number}
            </motion.button>
          ))}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-500 hover:text-black transition-colors duration-300"
          disabled={currentPage === totalPages}
          onClick={() => handlePageClick(currentPage + 1)}
        >
          <span className="text-2xl">{"❯"}</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Pagination;
