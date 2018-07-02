import * as React from "react";

const LayoutFill: React.SFC<object> = (props: object) => (
  <svg
    fill="currentColor"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M384 912h496c17.7 0 32-14.3 32-32V340H384v572zM880 112H384v164h528V144c0-17.7-14.3-32-32-32zM112 144v736c0 17.7 14.3 32 32 32h176V112H144c-17.7 0-32 14.3-32 32z" />
  </svg>
);

LayoutFill.displayName = "LayoutFill";

export default LayoutFill;
