import * as React from "react";

const CompassFill: React.SFC<object> = (props: object) => (
  <svg
    fill="currentColor"
    id="图层_1"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      className="st0"
      d="M697.1 322l-225.5 98.7 132.1 132.1 98.7-225.5c.4-1.1.4-2.2 0-3.2-.9-2.1-3.3-3-5.3-2.1zM322 697.1c-.4 1-.4 2.2 0 3.2.9 2.1 3.3 3 5.3 2.1l225.5-98.7-132.1-132.1L322 697.1z"
    />
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM327.3 702.4c-2 .9-4.4 0-5.3-2.1-.4-1-.4-2.2 0-3.2l98.7-225.5 132.1 132.1-225.5 98.7zm375.1-375.1l-98.7 225.5-132.1-132.1L697.1 322c2-.9 4.4 0 5.3 2.1.4 1 .4 2.1 0 3.2z" />
  </svg>
);

CompassFill.displayName = "CompassFill";

export default CompassFill;
