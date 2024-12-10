import { Link } from "react-router-dom";

import line from "../../assets/Line.png";

import { FaRegStar, FaShoppingCart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdAddShoppingCart, MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import useAxiosPublic from "../Hooks/useAxiosPublic/useAxiosPublic";
import useAuth from "../Hooks/useAuth/useAuth";
import { toast } from "react-toastify";
const ProductCard = ({ pc }) => {
  const { user, wistList, fetchWishList, cartProduct, cartProductID, fetchCartDetails } = useAuth();
  const axiosPublic = useAxiosPublic();

  const userEmail = user?.email;

  const {
    category,
    color,
    driveSize,
    featureImage,
    gpuBrand,
    modelName,
    name,
    processor,
    ram,
    rate,
    regularPrice,
    screenSize,
    sellPrice,
    stock,
    _id,
  } = pc;

  const fullStars = Math.floor(rate); // Get the number of full stars
  const hasHalfStar = rate % 1 !== 0; // Check if there is a half star
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Calculate empty stars

  const [showIcon, setShowIcon] = useState(false);

  const handleWishlistToggle = async (_id, userEmail) => {
    if (wistList.includes(_id)) {
      // If the item is already in the wishlist, remove it
      try {
        const response = await axiosPublic.delete("/wishlist/remove", {
          data: { userId: userEmail, productId: _id }, // Sending userId and productId in the body
        });
        fetchWishList();
      } catch (error) {
        console.error("Error removing from wishlist", error);
      }
    } else {
      // If the item is not in the wishlist, add it
      if (userEmail) {
        try {
          const response = await axiosPublic.post("wishlist/add", { user: userEmail, product: pc });
          fetchWishList();
        } catch (error) {
          console.error("Error adding to wishlist", error);
        }
      } else {
        toast.warning("Oops! Please log in to add items to your wishlist.");
      }
    }
  };

  const handleMouseEnter = () => {
    setShowIcon(true);
  };

  const handleMouseLeave = () => {
    if (wistList.includes(_id)) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  };

  // add to cart function
  const handleAddToCart = async (product, userEmail) => {
    if (userEmail) {
      try {
        const response = await axiosPublic.post("/cart/add", {
          product, // Full product object
          userEmail,
        });
        if (response.data.message === "Product added to cart") {
          // Handle success (e.g., show a message or update cart state)
          toast.success("Product added to cart");
          fetchCartDetails();
        } else if (response.data.message === "Product already in cart") {
          toast.warning("Product already in cart");
          fetchCartDetails();
        } else if (response.data.message === "Cart created and product added") {
          toast.success("Cart created and product added");
          fetchCartDetails();
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    } else {
      toast.warning("Oops! Please log in to add items to your cart.");
    }
  };


  

  return (
    <div
      className="flex flex-grow relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full max-w-sm bg-white shadow-md border border-gray-200 rounded-lg    ">
        <div className="flex justify-between items-center py-[20px]">
          <div>
            {sellPrice ? (
              <>
                <div className="w-[50px] h-[32px]  px-[6px] bg-[#FDDBC9] py-[4px] mt-[10px] rounded-r-[8px]">
                  <p className="text-[16px] font-light text-[#F45E0C]">
                    {regularPrice > 0 &&
                      Math.round(((regularPrice - sellPrice) / regularPrice) * 100) + "%"}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="w-[50px] h-[32px]  px-[6px] bg-[white] py-[4px] mt-[10px] rounded-r-[8px]"></div>
              </>
            )}
          </div>
          <div className="pr-[20px] absolute top-[6%] right-0">
            {(showIcon || wistList.includes(_id)) && (
              <button onClick={() => handleWishlistToggle(_id, userEmail)}>
                {wistList.includes(_id) ? (
                  <MdOutlineFavorite className="text-red-500" />
                ) : (
                  <MdFavoriteBorder />
                )}
              </button>
            )}
          </div>
        </div>

        <Link to={`/productDetails/${_id}`}>
          <img
            className="p-8 pb-0 w-[400px] rounded-t-lg transform transition-transform duration-300 hover:scale-110"
            src={featureImage}
            alt="product image"
          />
          <img className="p-2 rounded-t-lg" src={line} alt="product image" />
        </Link>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
              {name?.slice(0, 68)}...
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {/* Render full stars */}
              {Array(fullStars)
                .fill()
                .map((_, index) => (
                  <FaStar key={index} className="text-orange-400" />
                ))}

              {/* Render half star if there is one */}
              {hasHalfStar && <FaStarHalfAlt className="text-orange-400" />}

              {/* Render empty stars */}
              {Array(emptyStars)
                .fill()
                .map((_, index) => (
                  <FaRegStar key={index} className="text-gray-300" />
                ))}
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded  dark:text-blue-800 ms-3">
              {rate}
            </span>
          </div>

          <div className="flex items-center justify-between">
            {sellPrice ? (
              <>
                <del className="text-3xl font-bold text-gray-900 ">${regularPrice}</del>

                <span className="text-3xl font-bold text-gray-900 ">${sellPrice}</span>
              </>
            ) : (
              <>
                <span className="text-3xl font-bold text-gray-900 ">${regularPrice}</span>
              </>
            )}
          </div>
          <div className="flex justify-evenly mt-[30px]">
            {cartProductID.includes(_id) ? (
              <button
                onClick={() => handleAddToCart(pc, userEmail)}
                className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-6 py-3 transition-transform transform hover:scale-105 shadow-lg"
              >
                <Link className="flex items-center space-x-2" to="">
                  <MdAddShoppingCart className="text-white text-xl" />
                  <span className="uppercase">In Cart</span>
                </Link>
              </button>
            ) : (
              <button
                onClick={() => handleAddToCart(pc, userEmail)}
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-6 py-3 transition-transform transform hover:scale-105 shadow-lg"
              >
                <Link className="flex items-center space-x-2" to="">
                  <FaShoppingCart className="text-white text-xl" />
                  <span className="uppercase">Add to Cart</span>
                </Link>
              </button>
            )}

            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <Link to={`/productDetails/${_id}`} className="flex items-center ">
                {" "}
                <span>View Details</span>
                <IoIosArrowRoundForward className="mr-[5px]" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
