import React from "react";
import { ImageDisplayControl } from "@frameright/react-image-display-control";

const SearchItem = ({ searchItem }) => {
  return (
    <div className="flex flex-row gap-6">
      <div className="card card-compact  shadow-lg">
        <figure>
          <ImageDisplayControl>
            <img src={searchItem.img} />
          </ImageDisplayControl>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{searchItem.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
