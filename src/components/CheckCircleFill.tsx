import * as React from "react";

const CheckCircleFill: React.SFC<object> = (props: object) => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path
      d="M699 353h-46.9c-10.3 0-19.9 5-25.9 13.3L469 584.3l-71.2-98.8c-6-8.4-15.7-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.7 172.8c12.7 17.7 39 17.7 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7z"
      fill="currentColor"
    />
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292c-12.7 17.7-39 17.7-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
  </svg>
);

CheckCircleFill.displayName = "CheckCircleFill";

export default CheckCircleFill;
