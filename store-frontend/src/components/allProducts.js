import React from "react";
import { Link } from "react-router-dom";

const AllProducts = ({ data }) => {
  return (
    <div className="row mt-5">
      {data.map(product => (
        <div 
         className="col-md-3" key={product.id}>
          <div 
           className="card text-center">
            <div 
             className="card-header">
              <img
                src={`http://localhost:4000/${product.imgPath}`}
                className="img-card-top w-100"
                style={{"height": "170px"}}
                alt="product"
              />
            </div>
            <div className="card-body">
              <h2>{product.title}</h2>
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
