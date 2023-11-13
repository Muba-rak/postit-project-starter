import React from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import edit from "../assets/images/edit.svg";
import "../../styles/Create.css";

const Create = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div id="task3Top">
      <Layout>
        <div>
          <div className="task3">
            <div className="newTask">
              <h1>Create Story</h1>
            </div>
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
              <div className="titleTask">
                <img src={edit} alt="" />

                <input required type="file" accept="image/*" id="taskTitle" />
              </div>

              <div className="titleTask">
                <img src={edit} alt="" />

                <input type="text" placeholder="Title" id="taskTitle" />
              </div>

              <div className="tagS">
                <img src={edit} alt="" />

                <select id="tags">
                  <option value="">Select a category</option>
                  <option value="nature">Nature</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="sport">Sport</option>
                  <option value="technology">Technology</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <div className="descripTion">
                <img src={edit} alt="" />
                <textarea required placeholder="Description" id="describe" />
              </div>

              <div className="Btndone">
                <button type="submit" className="btnDone">
                  Publish Story
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Create;
