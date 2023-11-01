import React from "react";
import { Link } from "react-router-dom";

const Story = ({
  _id,
  title,
  description,
  tag,
  image,
  createdAt,
  createdBy,
}) => {
  return (
    <div style={{ maxWidth: "370px" }} className="mt-4 mx-auto mx-lg-2">
      <div className="card border-0">
        <div className="position-relative">
          <img
            src={image}
            className="card-img-top"
            alt="image"
            style={{ height: "296px", width: "100%" }}
          />
          <h6 className="tag image-text position-absolute bottom-0 ms-2 text-capitalize">
            {" "}
            {tag}{" "}
          </h6>
        </div>
        <div className="card-body">
          <h5 className="card-title my-1 fw-bold">{title}</h5>
          <div className="card-subtitle d-flex my-2">
            <p className="ms-2">
              <span className="text-muted">By </span>
              {createdBy}
              <span className="text-muted">- {createdAt}</span>
            </p>
          </div>

          <p className="card-text my-2 text-muted">{description}</p>
          <Link to="/viewStory" className="">
            Read More...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Story;
