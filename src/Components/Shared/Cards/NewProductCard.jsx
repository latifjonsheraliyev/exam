import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import line from "../../../assets/Line.png";
const NewProductCard = ({ product }) => {
    return (
        <div>
            <div className="w-full md:w-72 lg:w-full  shadow-xl hover:shadow-lg  transition-all rounded-xl p-4">
                <Link to='/shop'>
                    <img
                        className="p-8 pb-0 w-[400px] rounded-t-lg transform transition-transform duration-300 hover:scale-110"
                        src={product?.featureImage}
                        alt="product image"
                    />
                    <img className="p-2 rounded-t-lg" src={line} alt="product image" />
                </Link>
                <h1 className="text-2xl mt-6"><span className="font-semibold">Name:</span> <span className='  hover:text-blue-800'>{product?.name?.slice(0, 15)}</span> </h1>
                <div className="flex justify-between mb-2">
                    <p className="mt-8 text-[#717171] text-2xl"><span className=" font-semibold text-black">Price : </span>${product?.regularPrice}</p>
                    <p className="mt-8 text-2xl  text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-1">
                        <FaStar />
                        {product?.rate}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewProductCard;