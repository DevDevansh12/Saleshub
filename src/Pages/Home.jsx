import React from "react";

import Collections from "../Components/Collections";
import CardSection from "../Components/CardSection";
import VideoBanner from "../Components/VideoBanner";
import ProductDetails from "../Components/ProductDetails";
import ShopTheLooks from "../Components/ShopTheLooks";
import BannerSection from "../Components/BannerSection";

const Home = () => {
  return (
    <div>
      <VideoBanner />
      <Collections />
      <CardSection />
      <BannerSection />
      <ProductDetails />
      <ShopTheLooks />
    </div>
  );
};

export default Home;
