import React, { memo } from "react";
import styleStrToObject from "./utils";

const IconClose = memo((props) => {
  const { height = "16px", width = "16px" } = props;
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={styleStrToObject(
        `display: block; fill: none; height: ${height}; width: ${width}; stroke: currentcolor; stroke-width: 3; overflow: visible;`
      )}
    >
      <path d="m6 6 20 20"></path>
      <path d="m26 6-20 20"></path>
    </svg>
  );
});

export default IconClose;
