import React from "react";
import scrabble from "../assets/images/srabblepics.svg";

const StoryContent = () => {
  return (
    <div>
      <div className="Welcome">
        <div className="welcome1">
          <h1>You've got a story, postIt</h1>
          <p>
            Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
            massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
            aliquam id ut.
          </p>
        </div>
        <div>
          <img src={scrabble} alt="" className="scrabble" />
        </div>
      </div>
    </div>
  );
};

export default StoryContent;
