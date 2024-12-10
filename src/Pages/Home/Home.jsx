import React from "react";
import Banner from "./Banner";
import ProductOnSell from "./ProductOnSell/ProductOnSell";
import NewProducts from "./NewProducts/NewProducts";
import Prebook from "./Prebook/Prebook";
import BestSellers from "./BestSellers/BestSellers";
import ProductsInfo from "./ProductsInfo/ProductsInfo";
import AnotherHomePage from "../AnotherHomePage/AnotherHomePage";
import BlogCardForHome from "../blogs/BlogsForHome/BlogCardForHome";

const Home = () => {
  return (
    <>
      <Banner />
      <ProductsInfo />
      <ProductOnSell />
      <NewProducts />
      <Prebook />
      <BestSellers />
      <AnotherHomePage />
      <BlogCardForHome />
    </>
  );
};

export default Home;
