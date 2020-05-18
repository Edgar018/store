import React from "react";

const AllProducts = ({product}) => {
  return (
      <div className="col-4">
        <div className="card card-body mt-5">
            <h1>{product.title}</h1>
            <p>{product.author}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
      </div>
  );
};

export default AllProducts;
