import React, { useState, useEffect } from "react";
import "../../styles/Edit.css";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";

const EditStory = () => {
  return (
    <div>
      <Layout>
        <div className="task3">
          <div className="newTask">
            <h1>Update Story</h1>
          </div>
          <form>
            <div className="titleTask">
              <label htmlFor="taskTitle">Title</label>
              <input type="text" id="taskTitle" />
            </div>
            <div className="tagS">
              <label htmlFor="tags">Tags</label>
              <select name="" id="tags">
                <option value="">Tags</option>
                <option value="technology">Technology</option>
                <option value="nature">Nature</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="sport">Sport</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="descripTion">
              <label htmlFor="describe">Update your story.......</label>
              <textarea
                type="text"
                id="describe"
                placeholder="Edit your story......."
                wrap="soft"
                required
              ></textarea>
            </div>
            <div className="Btndone my-2">
              <button type="submit" className="btnDone">
                Update Story
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default EditStory;
