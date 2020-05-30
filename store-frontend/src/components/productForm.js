import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import Axios from 'axios';

const ProductForm = ({ validation }) => {

  const [images, setImages] = useState('');

  const createProduct = async (e) => {
    e.preventDefault();
    let form = document.getElementById("form");
    let data = new FormData(form);
    let URL = 'http://localhost:4000/api/products';

    data.append('image', images);

    Axios.post(URL, data)
    .then(res => {
      console.log(res);
      window.location.href = "/";
    });
  }
  const upload = (e) => {
    if(e.target.files && e.target.files[0]){

      setImages(e.target.files[0]);
    }
  };

  if (validation()) {
    return (
      <div className="container col-5">
        <div className="card card-body mt-5">
          <h1>Create Product</h1>
          <form id="form">
            <div className="form-group">
              <input
                className="form-control"
                name="author"
                type="text"
                placeholder="name"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="title"
                type="text"
                placeholder="title"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="description"
                type="text"
                placeholder="description"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="price"
                type="text"
                placeholder="price"
              />
            </div>
            <button
              onClick={createProduct}
              className="btn btn-primary btn-block"
            >
              send
            </button>
          </form>
          <input onChange={upload} type="file" name="file" />
        </div>
      </div>
    );
  }
  return <Redirect to="/signup" />;
};

export default ProductForm;
