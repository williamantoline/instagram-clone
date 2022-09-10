import React from "react";

import "./Scrollable.scss";

export default function Scrollable(props) {
  const classNames = props.className ? props.className.split(" ") : [];
  classNames.push("scrollable");

  return (
    <>
      <div className={classNames.join(" ")}>{props.children}</div>
    </>
  );
}
