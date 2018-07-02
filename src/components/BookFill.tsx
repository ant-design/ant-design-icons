import * as React from "react";

const BookFill: React.SFC<object> = (props: object) => (
  <svg
    fill="currentColor"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <path fill="none" d="M572 347.4l49.5-35.4 46.5 33.9V124h-96z" />
    <path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM668 345.9L621.5 312 572 347.4V124h96v221.9z" />
  </svg>
);

BookFill.displayName = "BookFill";

export default BookFill;
