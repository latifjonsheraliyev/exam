import React, { useEffect, useState } from "react";
import headphone from "../../../../../assets/headphone.png";
import CommentCard from "../BlogsComments/CommentCard";
import useAxiosSecure from "../../../../../Components/Hooks/useAxiosSecure/useAxiosSecure";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegComment, FaRegThumbsUp } from "react-icons/fa";
import LoadingSpinner from "../../../../../Components/Shared/LoadingSpiner/LoadingSpinner";

const BlogProductDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axiosSecure.get(`/blogs/details/${id}`);
        console.log(res.data);
        setBlog(res.data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id, axiosSecure]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!blog) {
    return (
      <div className="text-center text-2xl text-red-500 mt-10">
        Blog not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{blog.title}</h1>
      <div className="flex items-center text-gray-600 mb-6">
        <img
          src={blog.authorAvatar || "https://via.placeholder.com/40"}
          alt={blog.author}
          className="w-10 h-10 rounded-full mr-4"
        />
        <span className="mr-4">By {blog.author}</span>
        <span>
          {new Date(blog.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
      <img
        src={blog.imgSrc || headphone}
        className="w-full h-auto object-cover rounded-lg shadow-lg mb-8"
        alt={blog.title}
      />
      {/* <ol type="1" className="list-decimal list-inside">
            {blog.points.map((point, index) => (
              <li key={index}>
                <span className="font-semibold">{point.title}</span>
                <p className="my-2">{point.description}</p>
              </li>
            ))}
          </ol> */}
      <div className="prose max-w-none">
        <p className="text-lg leading-relaxed mb-6">{blog.content}</p>
        {blog.description && (
          <div className="bg-gray-100 p-6 rounded-lg my-8">
            <h2 className="text-2xl font-semibold mb-4">Key Points</h2>
            <div dangerouslySetInnerHTML={{ __html: blog.description }} />
          </div>
        )}
      </div>

      <div className="flex items-center justify-end space-x-6 mt-8 text-gray-600">
        <span className="flex items-center">
          <FaRegComment className="mr-2" size={20} />
          <span>{blog.comments} Comments</span>
        </span>
        <span className="flex items-center">
          <FaRegThumbsUp className="mr-2" size={20} />
          <span>{blog.likes} Likes</span>
        </span>
      </div>

      <hr className="my-8 border-t border-gray-300" />

      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <CommentCard />
      </div>
    </div>
  );
};

export default BlogProductDetails;
