import React, {Fragment} from "react";
import { Redirect } from "react-router-dom";

const Profile = ({ validation }) => {
  return (
  <Fragment>
    {
  validation()?
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card p-3 text-center">
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
      </div>
  :
  <Redirect to="/signup" />
  }
</Fragment>
  )
};

export default Profile;
