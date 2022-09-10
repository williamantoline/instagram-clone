import React from "react";

import "./Container.scss";

export default function Container(props) {
  const classNames = props.className ? props.className.split(" ") : [];
  classNames.push("container");
  let styles = {};

  if (props.display === "flex") classNames.push("flex");
  if (props.flexDirection === "row") classNames.push("flex-row");
  if (props.flexDirection === "column") classNames.push("flex-column");
  if (props.width) styles.width = props.width;
  if (props.maxWidth) styles.maxWidth = props.maxWidth;
  if (props.margin) styles.margin = props.margin.join("px ");

  return (
    <div style={styles} className={classNames.join(" ")}>
      {props.children}
    </div>
  );
}
