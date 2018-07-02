import * as React from "react";

const LeftCircleFill: React.SFC<object> = (props: object) => (
  <svg
    fill="currentColor"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M603.3 327.6l-246 178c-4.4 3.2-4.4 9.7 0 12.9l246 178c5.3 3.8 12.7 0 12.7-6.5v-46.9c0-10.3-4.9-19.9-13.2-25.9L457.4 512l145.4-105.2c8.3-6 13.2-15.7 13.2-25.9v-46.8c0-6.6-7.4-10.3-12.7-6.5z"
      fill="none"
    />
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm104 316.9c0 10.2-4.9 19.9-13.2 25.9L457.4 512l145.4 105.2c8.3 6 13.2 15.6 13.2 25.9V690c0 6.5-7.4 10.3-12.7 6.5l-246-178c-4.4-3.2-4.4-9.7 0-12.9l246-178c5.3-3.8 12.7-.1 12.7 6.5v46.8z" />
  </svg>
);

LeftCircleFill.displayName = "LeftCircleFill";

export default LeftCircleFill;
