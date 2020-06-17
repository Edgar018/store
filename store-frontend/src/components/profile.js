import React, { Fragment, useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import Axios from "axios";

const Profile = ({ validation }) => {
  const [product, setProduct] = useState(false);

  const getProductsOfUser = async () => {
    await Axios.get(
      "http://localhost:4000/api/products/productsUser/" +
        localStorage.getItem("id")
    ).then((res) => {
      if (res.data.length !== 0) {
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
              <div className="card text-center">
                <div className="card-header">
                  <img
                    src="./../images/images-default-profile.svg"
                    alt="default-profile"
                    style={{ height: "300px", width: "300px" }}
                  />
                </div>
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
          <div className="row text-center">
            <div className="col-md-12">
              <div className="card-header mt-5">
                <h3>Your products</h3>
              </div>
            </div>
            {product ? (
              product.map((product) => (
                <div key={product.id} className="col-md-4 mt-5">
                  <div className="card">
                    <div className="card-header">
                      <img
                        src={`http://localhost:4000/${product.imgPath}`}
                        style={{ width: "200px", height: "200px" }}
                        alt="product"
                      />
                    </div>
                    <h3>{product.title}</h3>
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
              ))
            ) : (
              <div className="col-md-12 text-center">
                <div className="card">
                  <div className="card-body">
                    <h3>you have no products yet</h3>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Redirect to="/signup" />
      )}
    </Fragment>
  );
};

export default Profile;
