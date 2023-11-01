import React from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import edit from "../assets/images/edit.svg";
import "../../styles/Create.css";
import { useState, useEffect } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);
  const [load, setload] = useState(true);

  const url = "https://postit-lltp.onrender.com/api/v1/post";
  const token = JSON.parse(localStorage.getItem("token"));

  const redirect = useNavigate();

  const createPost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("tags", tags);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("title", title);
    setload(false);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const data = await res.json();
      console.log(data);
      if (data.success) {
        redirect("/mystories");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="task3Top">
      <Layout>
        <div>
          <div className="task3">
            <div className="newTask">
              <h1>Create Story</h1>
            </div>
            <form encType="multipart/form-data">
              <div className="titleTask">
                <img src={edit} alt="" />
                <input
                  type="file"
                  id="taskTitle"
                  placeholder="select image"
                  accept="image/*"
                  name="image"
                  required
                />
              </div>

              <div className="titleTask">
                <img src={edit} alt="" />
                <input
                  type="text"
                  id="taskTitle"
                  placeholder="Title"
                  required
                />
              </div>
              <div className="tagS">
                <img src={edit} alt="" />
                <select name="" id="tags" required>
                  <option value="">Tags</option>
                  <option value="Technology">Technology</option>
                  <option value="Nature">Nature</option>
                  <option value="Lifestyle">Lifestyle</option>
                </select>
              </div>
              <div className="descripTion">
                <img src={edit} alt="" />
                <textarea
                  type="text"
                  id="describe"
                  placeholder="Write your story......."
                  wrap="soft"
                  required
                ></textarea>
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
