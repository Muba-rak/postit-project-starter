import React from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import edit from "../assets/images/edit.svg";
import "../../styles/Create.css";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  image: yup.mixed().required("Image is required"),
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  category: yup.string().required("Category is required"),
});

const Create = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };
  return (
    <div id="task3Top">
      <Layout>
        <div>
          <div className="task3">
            <div className="newTask">
              <h1>Create Story</h1>
            </div>
            <form
              encType="multipart/form-data"
              onSubmit={handleSubmit(onSubmit)}
            >
              <p className="errorMsg">{errors.image?.message}</p>
              <div className="titleTask">
                <img src={edit} alt="" />
                <Controller
                  name="image"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="file"
                      accept="image/*"
                      id="taskTitle"
                      defaultValue=""
                    />
                  )}
                />
              </div>

              <p className="errorMsg">{errors.title?.message}</p>
              <div className="titleTask">
                <img src={edit} alt="" />
                <Controller
                  name="title"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="Title"
                      id="taskTitle"
                      defaultValue=""
                    />
                  )}
                />
              </div>

              <p className="errorMsg">{errors.category?.message}</p>
              <div className="tagS">
                <img src={edit} alt="" />
                <Controller
                  name="category"
                  control={control}
                  render={({ field }) => (
                    <select {...field} id="tags" defaultValue="">
                      <option value="">Select a category</option>
                      <option value="nature">Nature</option>
                      <option value="lifestyle">Lifestyle</option>
                      <option value="sport">Sport</option>
                      <option value="technology">Technology</option>
                      <option value="others">Others</option>
                    </select>
                  )}
                />
              </div>

              <p className="errorMsg">{errors.description?.message}</p>
              <div className="descripTion">
                <img src={edit} alt="" />
                <Controller
                  name="description"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <textarea
                      {...field}
                      placeholder="Description"
                      id="describe"
                    />
                  )}
                />
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
