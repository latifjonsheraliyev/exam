import React from "react";
import img1 from '../../assets/images/products/iphone-14.png'
import SearchItem from "./SearchItem";

const SearchItems = () => {
  return (
    <div className="flex flex-col">
        {/* Search Field */}
      <label className="input input-bordered w-full flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      {/* Search Result Text */}
      <p className="text-[#505050] text-balance text-base font-light mt-4 mb-12">view 17 out of 30 results</p>
      {/* items info */}
        <div className="flex flex-wrap gap-5">
        {searchItemsArr?.map(searchItem => <SearchItem key={searchItem._id} searchItem={searchItem} />)}
        </div>
 
    </div>
  );
};

export default SearchItems;

const searchItemsArr = [
    {
        _id: 1,
        img : img1,
        title: 'Cases & Protection'
    },
    {
        _id: 2,
        img : img1,
        title: 'Cases & Protection'
    },
    {
        _id: 3,
        img : img1,
        title: 'Cases & Protection'
    },
    {
        _id: 4,
        img : img1,
        title: 'Cases & Protection'
    },
];
