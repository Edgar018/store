import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

const ProductForm = ({ validation }) => {
  const [images, setImages] = useState("");

  const createProduct = async (e) => {
    e.preventDefault();
    let form = document.getElementById("form");

    let data = new FormData(form);
    let URL = "http://localhost:4000/api/products";

    data.append("image", images);

    await Axios.post(URL, data).then((res) => {
      window.location.href = "/";
    });
  };

  const upload = (e) => {
    if (e.target.files[0]) {
      //PREVIEW IMAGE
      let imagePreview = document.getElementById("imgPreview");
      let reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          imagePreview.src = reader.result;
        }
      };
      reader.readAsDataURL(e.target.files[0]);

      //SEND STATE
      setImages(e.target.files[0]);
    }
  };

  if (validation()) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-body">
                <div className="text-center">
                  <img
                    src="../../images/upload.png"
                    id="imgPreview"
                    style={{ width: "350px", height: "250px" }}
                    alt="preview"
                  />
                </div>
                <div className="mt-5 custom-file">
                  <input
                    className="custom-file-input"
                    onChange={upload}
                    type="file"
                    name="file"
                  />
                  <label className="custom-file-label">Choose file</label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-body mt-5">
              <form id="form">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="author"
                    type="text"
                    placeholder="username"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    name="title"
                    type="text"
                    placeholder="title"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    rows="5"
                    className="form-control"
                    name="description"
                    placeholder="description"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    name="price"
                    type="number"
                    placeholder="price"
                    required
                  />
                </div>
                <button
                  onClick={createProduct}
                  className="btn btn-primary btn-block"
                >
                  send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <Redirect to="/signup" />;
};

export default ProductForm;
