import React from "react";
import { ImageDisplayControl } from "@frameright/react-image-display-control";

const SingleProduct = ({ pd }) => {
  return (
    <div className="w-[180px] shadow rounded-xl">
      <ImageDisplayControl>
        <img src={pd.image} width={148} className="mx-auto mb-2" />
      </ImageDisplayControl>
      <h4 className="text-center mb-2">{pd.title}</h4>
    </div>
  );
};

export default SingleProduct;
