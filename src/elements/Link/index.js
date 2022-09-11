import React from "react";

import "./index.scss";

export default function Link(props) {
  const classNames = props.className ? props.className.split(" ") : [];
  classNames.push("link");

  let styles = {};

  if (props.fs) styles.fontSize = props.fs;
  if (props.fw) styles.fontWeight = props.fw;

  return (
    <>
      <a className={classNames.join(" ")} href={props.href} style={styles}>
        {props.children}
      </a>
    </>
  );
}
