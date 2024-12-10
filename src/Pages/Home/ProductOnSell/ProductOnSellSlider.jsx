import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import img1 from "../../../assets/images/products/macbook.png";
import { useQuery } from "@tanstack/react-query";

const ProductOnSellSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Get all products
  const { data: products = [] } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const result = await axiosPublic.get('/products/all')
      return result.data
    }
  })
  console.log(products)
  return (
    <div className="relative w-full">
      <Swiper
        // Responsiveness for Swiper based on screen size
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        navigation={{
          prevEl: prevRef.current, // Custom previous button
          nextEl: nextRef.current, // Custom next button
        }}
        onSwiper={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {products?.map((pd) => (
          <SwiperSlide key={pd._id}>
            <div className="flex justify-center mr-2">
              <div className="rounded-lg hover:transition h-[237px]  hover:ease-in hover:duration-300  lg:max-w-[184px]  bg-white overflow-hidden relative p-2 sm:w-auto ">
                <div className=" absolute -top-2 -ml-2  rounded text-black ">
                  {pd?.sellPrice ? (
                    <>
                      <div className="w-[50px] h-[32px]  px-[6px] bg-[#FDDBC9] py-[4px] mt-[10px] rounded-r-[8px]">
                        <p className="text-[16px] font-light text-[#F45E0C]">
                          {pd?.regularPrice > 0 &&
                            Math.round(((pd?.regularPrice - pd?.sellPrice) / pd?.regularPrice) * 100) + "%"}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-[50px] h-[32px]  px-[6px]  py-[4px] mt-[10px] rounded-r-[8px]"></div>
                    </>
                  )}
                </div>
                {/* image  */}
                <img
                  src={pd.featureImage}
                  alt='pd image'
                  className="w-full object-cover h-[150px] sm:h-[130px]"
                />
                <h4 className="text-lg text-black font-light mt-2">
                  {pd.name.length > 20
                    ? pd.name.slice(0, 20) + "..."
                    : pd.name}
                </h4>
                {/* price  */}

                <div className="flex justify-between mt-2">
                  {/* Display regular price only if it exists */}
                  {pd?.regularPrice && (
                    <p className="text-gray-500 line-through text-lg sm:text-xs">
                      ${parseFloat(pd?.regularPrice).toFixed(2)}
                    </p>
                  )}

                  {/* Display sell price if it exists; if not, just show regular price */}
                  {pd?.sellPrice ? (
                    <p className="text-black font-semibold text-sm sm:text-xs">
                      ${parseFloat(pd?.sellPrice).toFixed(2)}
                    </p>
                  ) : (
                    pd?.regularPrice && (
                      <p className="text-black font-semibold text-sm sm:text-xs">
                        ${parseFloat(pd?.regularPrice).toFixed(2)}
                      </p>
                    )
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom position for navigation buttons */}
      <div className="absolute bottom-2  lg:-bottom-14 right-2 z-10 flex items-center gap-2">
        <button
          ref={prevRef}
          className="btn btn-info swiper-button-prev-custom  shadow-lg text-black p-2 rounded-full cursor-pointer"
        >
          <IoIosArrowBack />
        </button>
        <button
          ref={nextRef}
          className="btn btn-info swiper-button-next-custom  shadow-lg text-black p-2 rounded-full cursor-pointer"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default ProductOnSellSlider;
