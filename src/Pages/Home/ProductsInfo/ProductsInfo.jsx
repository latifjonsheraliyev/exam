import React from "react";
import img1 from "../../../assets/images/products/camera.png";
import img2 from "../../../assets/images/products/handler.png";
import img3 from "../../../assets/images/products/iphone-14.png";
import img4 from "../../../assets/images/products/iphone-backcover.png";
import img5 from "../../../assets/images/products/laptop.png";
import img6 from "../../../assets/images/products/watch.png";
import SingleProduct from "./SingleProduct";
import { fadeIn } from '../../../variants'
import { motion } from 'framer-motion'

const ProductsInfo = () => {
  return (
    <motion.section
      variants={fadeIn('down', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.7 }}
      className="container mx-auto px-4 my-20 sm:px-6 lg:px-8 mb-20">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-6">
        {someProductsInfo?.map((pd) => (
          <SingleProduct key={pd.id} pd={pd} />
        ))}
      </div>
    </motion.section>
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
