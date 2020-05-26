import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ validation }) => {
  if (validation()) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container">
          <Link to="/" className="navbar-brand">
            StoreApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="callapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="toggle navigation"
          >
            <span className="navbar-toggle-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/create" className="nav-link">
                  Create Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          StoreApp
        </Link>
        <div className="navbar-nav ml-auto">
          <Link to="/signin" className=" nav-link">
            Signin
          </Link>
          <Link to="/signup" className="nav-link">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
