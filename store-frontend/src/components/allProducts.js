import React from "react";
import { Link } from "react-router-dom";

const AllProducts = ({ data }) => {
  return (
    <div className="row">
      {data.map((product) => (
        <div className="col-md-4 p-2" key={product.id}>
          <div className="card">
            <div className="card-body">
              <h1>{product.title}</h1>
              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
            <div className="card-footer">
              <Link
                to={"/product/" + product.id}
                className="btn btn-info btn-block"
              >
                View Product
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
