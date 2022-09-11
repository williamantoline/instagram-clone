import React from "react";

import "./index.scss";

export default function Icon(props) {
  const classNames = props.className ? props.className.split(" ") : [];
  classNames.push("icon");

  let styles = {};

  return (
    <div className={classNames.join(" ")} style={styles}>
      <img width={props.width} src={props.img} />
    </div>
  );
}
