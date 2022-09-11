import React from "react";

import "./index.scss";

export default function Icon(props) {
  const classNames = props.className ? props.className.split(" ") : [];
  classNames.push("icon");

  return (
    <div className={classNames.join(" ")}>
      <img src={props.img} />
    </div>
  );
}
