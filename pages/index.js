import React from "react";

import { client } from "../lib/client";
import { FooterBanner, HeroBanner, Product } from "../conponents";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {/* <Product /> */}
        {products?.map((product, index) => (
          <Product key={product._id} product={products[index]} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);

  const bannerQuery = `*[_type == "banner"]`;
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
