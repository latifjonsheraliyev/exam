import React, { useState, useEffect } from "react";
import useAxiosSecure from "../../../../../Components/Hooks/useAxiosSecure/useAxiosSecure";
import LoadingSpinner from "../../../../../Components/Shared/LoadingSpiner/LoadingSpinner";
import { toast } from "react-toastify";

const truncateDescription = (description, wordLimit) => {
  const words = description.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return description;
};

const BlogsDataFetch = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axiosSecure.get("/blogs/lists");
        setBlogs(res.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        toast.error("Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [axiosSecure]);

  if (loading) {
    return <LoadingSpinner />;
  }

  const handleDelete = async (id) => {
    try {
      await axiosSecure.delete(`/blogs/delete/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id));
      toast.success("Blog deleted successfully");
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Failed to delete blog");
    }
  };

  return (
    <div className="w-full mt-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Blogs</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>Time to Read</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((article) => (
              <tr key={article._id}>
                <td>
                  <div className="avatar">
                    <div className="w-20 rounded">
                      <img src={article.imgSrc} alt={article.title} />
                    </div>
                  </div>
                </td>
                <td>{article.title}</td>
                <td>{truncateDescription(article.description, 10)}</td>
                <td>{article.date}</td>
                <td>{article.timeRead}</td>
                <td>
                  <button
                    onClick={() => handleDelete(article._id)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogsDataFetch;
