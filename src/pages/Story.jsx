import React from "react";
import cover from "../assets/images/cover.png";
import story2 from "../assets/images/story2.png";
import Layout from "../components/Layout";

const Story = () => {
  const tagClassName = (tags) => {
    if (tags === "nature") {
      return "tag-nature";
    } else if (tags === "technology") {
      return "tag-tech";
    } else if (tags === "sport") {
      return "tag-sport";
    } else {
      return "tag-lifestyle";
    }
  };
  return (
    <div>
      <Layout>
        <article className="view-post container">
          <div className=" border-0">
            <div className="">
              <p className="tag mt-3">Technology</p>
              <h3 className=" my-1 fw-bold">
                The 20 Biggest Fintech Companies In Nigeria 2022
              </h3>
              <div className="d-flex my-3 underline">
                <img
                  src={story2}
                  alt="image"
                  width="5%"
                  height="20%"
                  className=""
                />
                <p className="ms-2">
                  <span className="text-muted">By</span> Maria Davies{" "}
                  <span className="text-muted">- May 21, 2022</span>
                </p>
              </div>

              <img
                src={cover}
                className="card-img-top cover-image"
                alt="image"
              />

              <p className="my-2 lh-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quam
                mollitia, pariatur, ex hic porro placeat ratione ea cumque animi
                quisquam magnam similique repudiandae modi, odit accusamus amet
                earum temporibus vitae. Minus magni dolorum natus animi,
                provident repellendus labore dicta necessitatibus et voluptate
                officia adipisci, tenetur ea placeat cumque eaque!
              </p>

              <p className="lh-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quam
                mollitia, pariatur, ex hic porro placeat ratione ea cumque animi
                quisquam magnam similique repudiandae modi, odit accusamus amet
                earum temporibus vitae. Minus magni dolorum natus animi,
                provident repellendus labore dicta necessitatibus et voluptate
                officia adipisci, tenetur ea placeat cumque eaque!
              </p>

              <p className="lh-lg">
                Blandit in amet nisl ultrices vitae sit volutpat. Et urna,
                ullamcorper sapien, ut at nibh suscipit tincidunt ac. Et
                malesuada justo id massa. Eu, morbi convallis egestas egestas
                vel at ipsum. Ultrices viverra augue praesent massa, cursus
                arcu, sit in suscipit. Nunc blandit eget lobortis non vestibulum
                egestas lacinia ut. Aliquet lorem tristique eros, neque, eros,
                amet urna integer ornare. Et faucibus tristique quis viverra.
                Bibendum sit nibh cursus eu. Adipiscing elit ultrices faucibus
                neque nullam. Pharetra, enim ornare scelerisque id fermentum
                proin egestas tristique. Amet, tempor aliquet ac eu. Amet,
                tellus, integer enim leo risus nisl. Aliquet amet, est mi
                tristique tempus nisl tellus morbi massa. Pharetra libero
                viverra nullam eget eu, vel nam at aliquam. Dui bibendum
                accumsan orci sit.
              </p>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
};

export default Story;
