import React from "react";
import BlogsForm from "./BlogsForm/BlogsForm";
import BlogsDataFecth from "./BlogsFetch/BlogsDataFecth";

const Blogs = () => {
  return (
    <>
      <BlogsForm />

      <div className="my-6">
        <BlogsDataFecth />
      </div>
    </>
  );
};

export default Blogs;
