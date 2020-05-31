import React, { Fragment, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

const Profile = ({ validation }) => {
  const [product, setProduct] = useState(false);

  const getProductsOfUser = () => {
    Axios.get(
      "http://localhost:4000/api/products/productsUser/" +
        localStorage.getItem("id")
    ).then((res) => {
      if(res.data.length !== 0){
        setProduct(res.data);
        console.log(res.data);
      }
    });
  };

  useEffect(() => {
    getProductsOfUser();
  }, []);

  return (
    <Fragment>
      {validation() ? (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <div className="card p-2 text-center">
                <img
                  src="./../images/images-default-profile.png"
                  alt="default-profile"
                />
                <h2>{localStorage.getItem("name")}</h2>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">
                  <h2>Information</h2>
                </div>
                <div className="card-body">
                  <strong>Email</strong>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <strong>Full name</strong>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card mt-5 text-center">
                <div className="card-header">
                  <h3>Your products</h3>
                </div>
                {product ? (
                  product.map(product => (
                    <div className="mt-5" key={product.id}>
                      <img
                        src={`http://localhost:4000/${product.imgPath}`}
                        className="img-card-top w-25"
                        alt="product"
                      />
                      <h3>{product.title}</h3>
                    </div>
                  ))
                ) : (
                  <div className="m-5">
                    <h3>you have no products yet</h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/signup" />
      )}
    </Fragment>
  );
};

export default Profile;
