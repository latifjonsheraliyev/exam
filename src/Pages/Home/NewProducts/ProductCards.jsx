import React from "react";
import useAxiosPublic from "../../../Components/Hooks/useAxiosPublic/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import NewProductCard from "../../../Components/Shared/Cards/NewProductCard";

import { fadeIn } from '../../../variants'
import { motion } from 'framer-motion'

const ProductCards = () => {
  const axiosPublic = useAxiosPublic();

  // Get all products
  const { data: products = [], refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const result = await axiosPublic.get('/products/all');
      return result.data;
    }
  });

  // Reverse the products array before rendering
  const reversedProducts = [...products].reverse().slice(0, 4); // Clone and reverse the array to avoid mutating original

  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-4 gap-6">
      {reversedProducts.map((product) => (
        <NewProductCard key={product._id} product={product} />
      ))}
    </motion.div>
  );
};

export default ProductCards;
