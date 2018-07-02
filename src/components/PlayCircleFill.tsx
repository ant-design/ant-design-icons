import * as React from "react";

const PlayCircleFill: React.SFC<object> = (props: object) => (
  <svg
    fill="currentColor"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M656.1 506L437.7 347.2c-3.6-2.6-8.6-1.8-11.2 1.8-1 1.4-1.5 3-1.5 4.7v317.6c0 4.4 3.6 8 8 8 1.7 0 3.3-.5 4.7-1.5l218.4-158.9c3.6-2.6 4.4-7.6 1.8-11.1-.5-.7-1.1-1.3-1.8-1.8z"
      fill="none"
    />
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8c-1.4 1-3 1.5-4.7 1.5-4.4 0-8-3.6-8-8V353.7c0-1.7.5-3.3 1.5-4.7 2.6-3.6 7.6-4.4 11.2-1.8L656.1 506c.7.5 1.3 1.1 1.8 1.8 2.6 3.5 1.8 8.5-1.8 11.1z" />
  </svg>
);

PlayCircleFill.displayName = "PlayCircleFill";

export default PlayCircleFill;
