import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Layout show={true}>
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ height: "230px" }}
        >
          <div>
            <h3 className="text-capitalize"> oops!!! page not found 😢😢😢</h3>
            <Link to="/">
              <button className="btnContinue" style={{ maxWidth: "400px" }}>
                Go back to Home
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Error;
