import React from "react";
import Axios from "axios";

const FormSignin = ({ validation, setProfile }) => {
  const signin = async (e) => {
    e.preventDefault();
    let form = document.getElementById('form');
    let data = new FormData(form);
    const URL = 'http://localhost:4000/api/users/signin';

    Axios.post(URL, data).then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);

      if (validation()) {
        localStorage.setItem("name", data.get("username"));
        window.location.href = "/profile";
      }
    });
  };
  return (
    <div className="container col-5">
      <div className="card card-body mt-5">
        <form id="form" onSubmit={signin}>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="email"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="username"
              placeholder="username"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="password"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormSignin;
