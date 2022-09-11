import React from "react";

import "./Text.scss";

export default function Text(props) {
  const classNames = props.className ? props.className.split(" ") : [];
  classNames.push("text");
  let styles = {};

  if (props.fs) styles.fontSize = props.fs;
  if (props.fw) styles.fontWeight = props.fw;
  if (props.width) styles.width = props.width;
  if (props.align) styles.textAlign = props.align;

  return (
    <span className={classNames.join(" ")} style={styles}>
      {props.children}
    </span>
  );
}
