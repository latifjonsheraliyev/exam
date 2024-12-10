import React, { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import { TbHomeRibbon, TbTruckDelivery } from "react-icons/tb";
import { LuShieldCheck } from "react-icons/lu";
import { FaAngleRight, FaCheck } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { RiDiscountPercentFill } from "react-icons/ri";
import { BsFillCartCheckFill } from "react-icons/bs";
import TabListProduct from "./TabListProduct";
import ImageSlider from "./ImageSlider";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Link } from "react-scroll";
import useAxiosPublic from "../../Components/Hooks/useAxiosPublic/useAxiosPublic";
import useAuth from "../../Components/Hooks/useAuth/useAuth";

const ProductDetails = () => {
  const { user, wistList, fetchWishList, cartProduct, cartProductID, fetchCartDetails } = useAuth();
  const userEmail = user?.email;

  const [similarProduct, setSimilarProduct] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const [pastOrder, setPastOrder] = useState([]);

  const isPresentPastOrder = pastOrder.includes(id);
  

  const { data: product = [] } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const result = await axiosPublic.get(`/products/details/${id}`);
      return result.data;
    },
  });

  useEffect(() => {
    if (user?.email) {
      axiosPublic
        .get(`/get-payments?email=${user.email}`)
        .then((response) => {
          const pastOrderedProductsId = response?.data?.userPayment
            ?.filter((payment) => payment.deliveryStatus === "delivered") // Filter by deliveryStatus
            .flatMap(
              (payment) => payment.cart.map((item) => item.product._id) // Extract product _id
            );
            setPastOrder(pastOrderedProductsId);
        })
        .catch((error) => {
          setError("Error fetching payment data");
        });
    }
  }, [user]);

  const {
    name,
    modelName,
    rate,
    regularPrice,
    sellPrice,
    screenSize,
    stock,
    processor,
    gpuBrand,
    driveSize,
    color,
    category,
    brand,
    WebCam,
    WarrantyDetails,
    Speaker,
    KeyboardType,
    BatteryCapacity,
    featureImage,
    galleryImages,
    _id,
  } = product;

  useEffect(() => {
    // Only fetch products if category is defined
    if (!category) return;

    const fetchProducts = async () => {
      try {
        const response = await axiosPublic.get("/products/all");

        // Filter products by category
        const filteredProducts = response.data.filter((p) => p.category === category);
        setSimilarProduct(filteredProducts);
      } catch (err) {
        setError(err.message || "Something went wrong");
      }
    };

    fetchProducts();
  }, [category, id]);

  console.log(similarProduct, "similarProduct");

  const handleColorSelect = (color) => {
    setSelectedColor(color);
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
    <div className="container mx-auto ">
      <div className="hero ">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-10 my-12 sm:my-16 lg:my-28">
          {/* <img src={laptop1} alt="" /> */}
          <div>
            <ImageSlider featureImage={featureImage} galleryImages={galleryImages} />
          </div>

          {/* card-1  */}
          <div className=" bg-base-100  ">
            <div className="card-body">
              {/* name  */}
              <h2 className="text-3xl ">{name}</h2>

              <div className="flex my-2 items-center gap-4">
                {/* rating */}
                <div className="flex items-center gap-1 bg-[#063A88] text-white border rounded-lg px-2 p-1">
                  <IoStar className="w-5 h-5" />
                  <p className="font-semibold">{rate}</p>
                </div>
                <div>
                  <p className="text-gray-500 font-semibold text-2xl ">sold 125</p>
                </div>
              </div>

              <div className="flex my-4 items-center gap-2 flex-rap w-full">
                {/* number-1 */}
                <div className="flex items-center gap-1 whitespace-nowrap">
                  <TbHomeRibbon className="w-6 h-7 text-blue-500" />
                  <p className="text-gray-500 font-semibold">In Stock</p>
                </div>
                {/* number-2 */}
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <LuShieldCheck className="w-6 h-6 text-blue-500" />
                  <p className="text-gray-500 font-semibold">Guaranteed</p>
                </div>
                {/* number-3 */}
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <TbTruckDelivery className="w-8 h-8 text-blue-500" />
                  <p className="text-gray-500 font-semibold">Free Delivery</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-10">
                  <h1 className="text-3xl">Select Color :</h1>
                  <div className="flex gap-4 mt-4">
                    {/* Black color input */}
                    <div
                      className={`w-8 h-8 rounded-full cursor-pointer flex justify-center items-center ${
                        selectedColor === "Black" ? "ring-4 ring-black" : ""
                      }`}
                      style={{ backgroundColor: "Black" }}
                      onClick={() => handleColorSelect("Black")}
                    >
                      {selectedColor === "Black" && <FaCheck className="text-white" />}
                    </div>

                    {/* gray color input */}
                    <div
                      className={`w-8 h-8 bg-base-300 rounded-full cursor-pointer flex justify-center items-center ${
                        selectedColor === color ? "ring-4 ring-white border  shadow-2xl" : ""
                      }`}
                      style={{ backgroundColor: `${color}` }}
                      onClick={() => handleColorSelect(`${color}`)}
                    >
                      {selectedColor === `${color}` && <FaCheck className="text-white" />}
                    </div>
                  </div>

                  <p className="mt-4 font-semibold"> {selectedColor}</p>
                </div>
              </div>

              {/* product-List  */}
              <div className="ml-8 mt-8">
                <ul style={{ listStyleType: "disc" }} className="space-y-4">
                  <li>
                    <div className="flex items-center justify-between">
                      {/* Left-aligned label */}
                      <p className="text-xl font-semibold text-gray-600">Brand</p>
                      {/* Left-aligned value */}
                      <p className="text-xl font-semibold text-black text-right">{brand}</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-semibold text-gray-600">Model Name</p>
                      <p className="text-xl font-semibold text-black text-right">{modelName}</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-semibold text-gray-600">Screen Size</p>
                      <p className="text-xl font-semibold text-black text-right">{screenSize}</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-semibold text-gray-600">Hard Disk Size</p>
                      <p className="text-xl font-semibold text-black text-right">{driveSize}</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-semibold text-gray-600">CPU Model</p>
                      <p className="text-xl font-semibold text-black text-right">{processor}</p>
                    </div>
                  </li>
                </ul>
                <div>
                  <Link
                    to="Technical-Details"
                    className="btn  text-xl -ml-3 text-blue-600 bg-white hover:bg-white"
                  >
                    Show More <FaAngleRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* card-2  */}
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              {/* price */}

              <div className="flex justify-between items-center mb-4">
                {sellPrice ? (
                  <h3 className="text-2xl sm:text-3xl font-semibold text-black">${sellPrice}</h3>
                ) : (
                  <h3 className="text-2xl sm:text-3xl font-semibold text-black">${regularPrice}</h3>
                )}

                {sellPrice && (
                  <div className="flex items-center text-[#F45E0C] font-bold text-lg sm:text-xl">
                    <RiDiscountPercentFill className="w-6 h-6 mr-1" />{" "}
                    {regularPrice > 0 &&
                      Math.round(((regularPrice - sellPrice) / regularPrice) * 100) + "%"}
                  </div>
                )}
              </div>
              {/* last price  */}
              {sellPrice && (
                <p className="text-xl font-semibold text-gray-500">Last price $ {regularPrice}</p>
              )}

              <div>
                <div className="flex items-center gap-4 my-4">
                  <input type="radio" name="color" value="yellow" className="w-8 h-8" />
                  <div className="text-2xl text-gray-600 font-semibold">Pay Now</div>
                </div>
                <div className="flex items-center gap-4 my-4">
                  <input type="radio" name="color" value="yellow" className="w-8 h-8" />
                  <div className="text-2xl text-gray-600 font-semibold">Buy in installments</div>
                </div>
                <p className=" text-gray-600 text-xl"> Choose your installments period</p>
              </div>

              <div className="flex flex-wrap gap-4 mb-4">
                {["3 ", "6 ", "12 ", "18 "].map((period) => (
                  <div
                    key={period}
                    className="flex-grow bg-gray-200 hover:border-blue-500 border-2 border-transparent text-center  font-semibold py-2 rounded-lg cursor-pointer transition-all duration-200"
                  >
                    <span className="text-xl">{period}</span> <br /> Month
                  </div>
                ))}
              </div>
              <div className="text-xl my-2 text-gray-600 ">
                {" "}
                <span className="font-semibold">$ 433.00/</span> <span>Month</span>
              </div>
              {/* btn  */}
              <button className=" btn text-center rounded-lg bg-[#0C68F4] text-white border-white border-2 hover:text-[#0C68F4] hover:border-[#0C68F4] btn-lg hover:bg-white text-xl text-semibold">
                Buy Now
              </button>
              {cartProductID.includes(_id) ? (
                <button
                  onClick={() => handleAddToCart(product, userEmail)}
                  className="btn rounded-lg btn-lg border-[#0C68F4] bg-white text-[#0C68F4]  border-2 hover:text-white hover:border-[#0C68F4] hover:bg-[#0C68F4]   w-full text-xl text-semibold"
                >
                  In cart <BsFillCartCheckFill className="h-7 w-7" />
                </button>
              ) : (
                <button
                  onClick={() => handleAddToCart(product, userEmail)}
                  className="btn rounded-lg btn-lg border-[#0C68F4] bg-white text-[#0C68F4]  border-2 hover:text-white hover:border-[#0C68F4] hover:bg-[#0C68F4]   w-full text-xl text-semibold"
                >
                  Add to cart <BsFillCartCheckFill className="h-7 w-7" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* tablist-components  */}
      <TabListProduct product={product} key={_id} similarProduct={similarProduct} isPresentPastOrder={isPresentPastOrder}></TabListProduct>

      {/* Review  */}
    </div>
  );
};

export default ProductDetails;
