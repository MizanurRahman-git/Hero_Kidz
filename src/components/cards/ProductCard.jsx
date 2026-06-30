"use client"

import React from "react";
import Image from "next/image"
import { FaStar, FaShoppingCart } from "react-icons/fa"

const ProductCard = ({product}) => {
  const { title, image, price, ratings, reviews, sold } = product;
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
      <figure className="relative h-56 bg-base-200">
        <Image src={image} alt={title} fill  />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-base line-clamp-2 min-h-12">
          {title}
        </h2>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            <span>{ratings}</span>
            <span>({reviews})</span>
          </div>

          <span>{sold} Sold</span>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">৳{price}</span>

          <button className="btn btn-primary">
            <FaShoppingCart />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
