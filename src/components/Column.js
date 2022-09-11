import React from "react";

import "./Column.scss";

export default function Column(props) {
  return (
    <>
      <div className="flex flex-column justify-between">{props.children}</div>
    </>
  );
}
