import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Components
import Navigation from "./components/navigation";
import Banner from "./components/banner";
import ProductForm from "./components/productForm";
import AllProducts from "./components/allProducts";
import FormSignup from "./components/formSignup";
import FormSignin from "./components/formSignin";
import Profile from "./components/profile";
import Product from "./components/product";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    showProducts();
  }, []);

  const showProducts = async () => {
    let res = await fetch("http://localhost:4000/api/products");
    let products = await res.json();
    setData(products);
  };

  const validation = () => {
    if (
      localStorage.getItem("token") !== null &&
      localStorage.getItem("token") !== "undefined"
    ) {
      return true;
    }
    return false;
  };
  return (
    <div>
      <Router>
        <Navigation validation={validation} />
        <Route
          exact
          path="/"
          render={() => {
            return (
              <Fragment>
                <Banner />
                <AllProducts data={data} />
              </Fragment>
            );
          }}
        />
        <Route
          exact
          path="/create"
          render={() => {
            return <ProductForm validation={validation} />;
          }}
        />
        <Route
          exact
          path="/signin"
          render={() => {
            return <FormSignin validation={validation} />;
          }}
        />
        <Route
          exact
          path="/signup"
          render={() => {
            return <FormSignup validation={validation} />;
          }}
        />
        <Route
          exact
          path="/profile"
          render={() => {
            return <Profile validation={validation} />;
          }}
        />
        <Route
          exact
          path={"/product/:id"}
          render={() => {
            return <Product />;
          }}
        />
      </Router>
    </div>
  );
};

export default App;
