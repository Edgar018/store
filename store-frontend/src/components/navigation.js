import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ validation }) => {


  const logout = () => {
    localStorage.clear();
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 shadow-sm bg-white rounded">
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
              <li className="nav-item">
                <a 
                 onClick={logout}
                 href="/" 
                 className="nav-link">
                  Logout
                </a>
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
