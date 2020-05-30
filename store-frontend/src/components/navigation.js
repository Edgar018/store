import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ validation }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div className="container">
        <Link to="/" className="navbar-brand">
          StoreApp
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">

          {validation() ? (
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
          ) : (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/signin" className=" nav-link">
                  Signin
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  Signup
                </Link>
              </li>
            </ul>
          )}
          
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
