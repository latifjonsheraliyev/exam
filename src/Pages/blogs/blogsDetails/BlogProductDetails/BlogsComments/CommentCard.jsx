import React, { useState } from "react";
import image1 from "../../../../../assets/headphone.png"; // Assuming you have an image here
import { FaThumbsUp, FaThumbsDown, FaStar, FaCaretDown } from "react-icons/fa";
import Textarea from "./TextArea";

const CommentCard = () => {
  const [expandedComments, setExpandedComments] = useState({});
  const comments = [
    {
      id: "1",
      userName: "Anna Ley",
      userProfile: image1,
      date: "March 30, 2023",
      comment:
        "This article deepened my appreciation for headphones as not only devices of entertainment but also as a blend of science and innovation that enrich our auditory experiences.",
      fullComment:
        "It goes into depth about how sound quality, noise-cancellation technology, and comfort have evolved over the years. Truly fascinating!",
      star: "4.6",
      like: "10",
      dislike: "2",
    },
    {
      id: "2",
      userName: "Anna Ley",
      userProfile: image1,
      date: "March 30, 2023",
      comment:
        "This article deepened my appreciation for headphones as not only devices of entertainment but also as a blend of science and innovation that enrich our auditory experiences.",
      fullComment:
        "It goes into depth about how sound quality, noise-cancellation technology, and comfort have evolved over the years. Truly fascinating!",
      star: "4.6",
      like: "10",
      dislike: "2",
    },
  ];

  const toggleExpand = (id) => {
    setExpandedComments((prevExpandedComments) => ({
      ...prevExpandedComments,
      [id]: !prevExpandedComments[id],
    }));
  };

  return (
    <div>
      <h2 className="text-lg font-semibold my-10">Comments</h2>
      <div className="mx-auto ">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="border rounded-lg  p-4 my-2 bg-gray-50"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  className="w-[60px] h-[60px] rounded-full object-cover"
                  src={comment.userProfile}
                  alt="Profile"
                />
                <div>
                  <h4 className="text-sm font-semibold">{comment.userName}</h4>
                  <p className="text-xs text-gray-500">{comment.date}</p>
                </div>
              </div>
              {/* Rating */}
              <div className="flex items-center space-x-1 px-2 py-1 rounded-md text-white bg-[#063A88]">
                <FaStar />
                <span className="text-sm font-semibold">{comment.star}</span>
              </div>
            </div>

            {/* Comment */}
            <div className="mt-3 text-gray-700">
              <p>{comment.comment}</p>
              {expandedComments[comment.id] && (
                <p className="mt-2">{comment.fullComment}</p>
              )}
              <div className="flex items-center justify-end">
                <button
                  className="text-sm flex items-center text-blue-500  mt-2 "
                  onClick={() => toggleExpand(comment.id)}
                >
                  {expandedComments[comment.id] ? "Show Less" : "Show More"}
                  <FaCaretDown />
                </button>
              </div>
            </div>

            {/*  Likes/Dislikes */}
            <div className="mt-3 flex items-center justify-end text-gray-500">
              <div className="flex  items-center space-x-3">
                <span className="flex items-center space-x-1">
                  <FaThumbsUp className="text-blue-500" />
                  <span>{comment.like}</span>
                </span>
                <apan className="h-4 w-px bg-gray-400"></apan>
                <span className="flex items-center space-x-1">
                  <FaThumbsDown className="text-blue-500" />
                  <span>{comment.dislike}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Comment Box */}
      <h2 className="text-lg font-semibold my-10">Leave a Comment</h2>

      <Textarea />
    </div>
  );
};

export default CommentCard;
