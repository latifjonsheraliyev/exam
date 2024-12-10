import React from "react";

const Textarea = () => {
  return (
    <div className="">
      <textarea
        id="comment"
        name="comment"
        rows="4"
        className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm resize-none"
        placeholder="Write your comment..."
      ></textarea>
      <div className="flex justify-end my-3">
        <button className="rounded-lg text-white px-16 bg-blue-500 py-3 me-0">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Textarea;
