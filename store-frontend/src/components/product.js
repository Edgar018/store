import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router';
import Chat from './chat';

const Product = () => {
  const [productData, setProductData] = useState([]);

  let  { id }  = useParams();

  useEffect(() => {

    const getProductData = () => {
      const URL = 'http://localhost:4000/api/products/';
      Axios.get(URL + id).then((res) => setProductData(res.data));
    };
    
    getProductData();
  }, [id]);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-5">
          <div className="card">
            {
            productData.imgPath
            ?
            <img
              src=
              {`http://localhost:4000/${productData.imgPath}`}
              className="img-card-top w-100 p-5"
              alt="product"
            />
            :
            <h2>Loading</h2>
            }
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>{productData.title}</h3>
            </div>
            <div className="card-body">
              <strong>Name</strong>
              <p>{productData.name}</p>
              <strong>Description</strong>
              <p>{productData.description}</p>
              <strong>Price</strong>
              <p>{productData.price}</p>
            </div>
          </div>
        </div>
      </div>
      <Chat id={id}/>
    </div>
  );
};

export default Product;
