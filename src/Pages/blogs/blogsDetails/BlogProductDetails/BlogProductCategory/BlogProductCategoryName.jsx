import React, { useState } from "react";
import RecentPost from "../../../RecentPost";
import Tags from "./Tags";
import {
  FaChevronRight,
  FaShare,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const BlogProductCategoryName = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { name: "Technology Trends and News", icon: "🌐" },
    { name: "Gaming Insights", icon: "🎮" },
    { name: "Security and Privacy", icon: "🔒" },
    { name: "Tech Lifestyle and Productivity", icon: "💼" },
    { name: "Product Spotlight", icon: "🔦" },
    { name: "How-to Guides and Tutorials", icon: "📚" },
    { name: "Buying Guides and Tips", icon: "💡" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-2 w-full">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">
        Categories
      </h2>

      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`flex items-center justify-between p-2 rounded-md transition-colors duration-300 cursor-pointer ${
              activeCategory === index
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-100"
            }`}
            onClick={() => setActiveCategory(index)}
          >
            <span className="flex items-center">
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </span>
            <FaChevronRight
              className={`transition-transform duration-300 ${
                activeCategory === index ? "transform rotate-90" : ""
              }`}
            />
          </li>
        ))}
      </ul>

      <RecentPost />
      <Tags />

      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 border-b pb-2">
          Share
        </h2>
        <div className="flex space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-300">
            <FaFacebookF size={20} />
          </button>
          <button className="bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-full transition-colors duration-300">
            <FaTwitter size={20} />
          </button>
          <button className="bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-full transition-colors duration-300">
            <FaLinkedinIn size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogProductCategoryName;
