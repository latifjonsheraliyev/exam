import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../../assets/images/products/camera.png";
import img2 from "../../assets/images/products/handler.png";
import img3 from "../../assets/images/products/iphone-14.png";
import img4 from "../../assets/images/products/iphone-backcover.png";
import img5 from "../../assets/images/products/laptop.png";
import img6 from "../../assets/images/products/watch.png";

const ProductsInfo = () => {
    return (
      <section className="max-w-[1440px] mx-auto px-6 mb-12">
        <Swiper
          spaceBetween={30} // Space between slides
          slidesPerView={6}  // Show 6 cards per view on larger screens
          navigation         // Enable navigation arrows
          pagination={{ clickable: true }} // Enable pagination dots
          breakpoints={{
            // Responsive breakpoints
            320: {
              slidesPerView: 1, // 1 slide on very small screens
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2, // 2 slides on small screens
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3, // 3 slides on medium screens
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4, // 4 slides on large screens
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 6, // 6 slides on extra large screens
              spaceBetween: 30,
            },
          }}
        >
          {someProductsInfo?.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white p-4 shadow-md rounded-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  };
  
  export default ProductsInfo;
  
  const someProductsInfo = [
    { id: 1, title: "Camera", image: img1 },
    { id: 2, title: "Gaming", image: img2 },
    { id: 3, title: "Smart Phone", image: img3 },
    { id: 4, title: "Accessories", image: img4 },
    { id: 5, title: "Laptop", image: img5 },
    { id: 6, title: "Smart Watch", image: img6 },
  ];