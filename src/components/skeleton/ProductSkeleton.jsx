import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="skeleton h-56 w-full rounded-t-xl"></div>

      <div className="card-body space-y-4">
        <div className="skeleton h-5 w-full"></div>
        <div className="skeleton h-5 w-3/4"></div>

        <div className="flex justify-between">
          <div className="skeleton h-4 w-24"></div>
          <div className="skeleton h-4 w-16"></div>
        </div>

        <div className="flex items-center justify-between">
          <div className="skeleton h-8 w-20"></div>
          <div className="skeleton h-10 w-32"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
