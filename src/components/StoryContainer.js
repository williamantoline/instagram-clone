import React from "react";

import "./StoryContainer.scss";

export default function StoryContainer(props) {
  return (
    <>
      <div className="story-container">{props.children}</div>
    </>
  );
}
