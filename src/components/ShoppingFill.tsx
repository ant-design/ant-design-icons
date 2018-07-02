import * as React from "react";

const ShoppingFill: React.SFC<object> = (props: object) => (
  <svg
    fill="currentColor"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M512 184c-61.9 0-112 50.1-112 112v16h224v-16c0-61.9-50.1-112-112-112z"
      fill="none"
    />
    <path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-208 0H400v-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16z" />
  </svg>
);

ShoppingFill.displayName = "ShoppingFill";

export default ShoppingFill;
