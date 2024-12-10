import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure/useAxiosSecure";
import LoadingSpinner from "../../../Components/Shared/LoadingSpiner/LoadingSpinner";
import { fadeIn } from '../../../variants'
import { motion } from 'framer-motion'

const truncateWords = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

const BlogCardForHome = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await axiosSecure.get(`/blogs/lists`);
        setBlogs(res.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        // toast.error("Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [axiosSecure]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container px-4 sm:px-6 lg:px-8 mx-auto  py-8">
      {blogs.slice(0, 1).map((blog) => (
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.4 }}
          key={blog._id} className="w-full mx-auto">
          <Link to={`/blog/list/${blog._id}`}>
            <div className="bg-white w-full shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-102 mx-auto">
              <img
                src={blog.imgSrc}
                alt={blog.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-2">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{blog.date}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{blog.timeRead}</span>
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {truncateWords(blog.title, 8)}
                </h2>
                <p className="text-gray-600 mb-4">
                  {truncateWords(blog.description, 25)}
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    to={`/blog/list/${blog._id}`}
                    className="text-[#F45E0C] font-semibold hover:underline flex items-center gap-2"
                  >
                    Read More
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}

      <div className="w-full space-y-6">
        {blogs && blogs.length > 0 ? (
          blogs.slice(1, 3).map((recentBlog) => (
            <Link to={`/blog/list/${recentBlog._id}`} key={recentBlog._id}>
              <motion.div
                variants={fadeIn('left', 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="flex bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 my-2">
                <div className="w-1/3">
                  <img
                    src={recentBlog.imgSrc}
                    alt={recentBlog.title}
                    className="h-56 w-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h2
                    className={`text-xl font-bold mb-2 ${recentBlog.highlighted
                      ? "text-orange-500"
                      : "text-gray-800"
                      }`}
                  >
                    {truncateWords(recentBlog.title, 8)}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {truncateWords(recentBlog.description, 15)}
                    {recentBlog.description.split(" ").length > 15 && (
                      <span className="text-blue-500 hover:underline ml-1">
                        See more
                      </span>
                    )}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="mr-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{recentBlog.date}</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">
            No posts available.
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogCardForHome;
