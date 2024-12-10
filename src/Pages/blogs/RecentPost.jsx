import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure/useAxiosSecure";
import { toast } from "react-toastify";
import LoadingSpinner from "../../Components/Shared/LoadingSpiner/LoadingSpinner";
import { Link } from "react-router-dom";

const RecentPost = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Total pages from API
  const axiosSecure = useAxiosSecure();

  const postsPerPage = 5; // You can adjust this value

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await axiosSecure.get(
          `/blogs/list?page=${currentPage}&limit=${postsPerPage}`
        );

        // Ensure that 'blogs' exists in the response
        if (res.data && res.data.blogs) {
          setBlogs(res.data.blogs); // Assuming res.data.blogs contains the array of blog posts
          setTotalPages(res.data.totalPages); // Assuming totalPages is part of the response
        } else {
          setBlogs([]); // Set an empty array if 'blogs' is not present
          setTotalPages(1); // Fallback in case totalPages is missing
        }
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [axiosSecure, currentPage]);

  if (loading) {
    return <LoadingSpinner />;
  }

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return description;
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mt-8 w-full mx-auto">
      <h2 className="text-2xl font-semibold">Recent Posts</h2>

      <div className="max-w-[700px] w-full space-y-4 my-4">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <Link to={`/blog/list/${blog._id}`} key={blog._id}>
              <div
                key={blog._id}
                className="grid grid-cols-12 mb-2 gap-4 p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 mx-auto"
              >
                <div className="col-span-4">
                  <img
                    src={blog.imgSrc}
                    alt={blog.title}
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
                <div className="col-span-8">
                  <h2
                    className={`text-lg font-semibold ${
                      blog.highlighted ? "text-orange-500" : "text-gray-800"
                    }`}
                  >
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">
                    {truncateDescription(blog.description, 10)}
                    {blog.description.split(" ").length > 10 && (
                      <button className="text-blue-500 hover:underline ml-1">
                        See more
                      </button>
                    )}
                  </p>
                  <div className="flex items-center mt-3 text-sm text-gray-500 space-x-2">
                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No posts available.</p> // Show a message if no blogs are found
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center my-4">
        <button
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:bg-gray-400"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:bg-gray-400"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RecentPost;
