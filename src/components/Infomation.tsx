import * as React from "react";

const Infomation: React.SFC<object> = (props: object) => (
  <svg
    fill="currentColor"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <circle cx={512} cy={224} r={64} />
    <path d="M544 392h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V400c0-4.4-3.6-8-8-8z" />
  </svg>
);

Infomation.displayName = "Infomation";

export default Infomation;
