import React from "react";
import Layout from "../components/Layout";
import StoryContent from "../components/StoryContent";
import stories from "../mockData/story";
import Story from "../components/Story";

const Allstories = () => {
  console.log(stories);
  return (
    <div>
      <Layout>
        <div>
          <StoryContent />
        </div>
        <div className="container story-div  mt-3">
          {stories.map((story) => {
            return <Story key={story._id} {...story} />;
          })}
        </div>
      </Layout>
    </div>
  );
};

export default Allstories;
