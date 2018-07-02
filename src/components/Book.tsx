import * as React from "react";

const Book: React.SFC<object> = (props: object) => (
  <svg id="图层_1" viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path className="st0" d="M668 345.9V136h-96v211.4l49.5-35.4z" />
    <path
      className="st0"
      d="M728 432.5c0 8.8-7.2 16-16 16-3.4 0-6.7-1.1-9.4-3.1L621.1 386l-83.8 59.9c-7.2 5.1-17.2 3.5-22.3-3.7-1.9-2.7-3-6-3-9.3V136H232v752h560V136h-64v296.5z"
    />
    <path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-260 72h96v209.9L621.5 312 572 347.4V136zm220 752H232V136h280v296.9c0 3.3 1 6.6 3 9.3 5.1 7.2 15.1 8.9 22.3 3.7l83.8-59.9 81.4 59.4c2.7 2 6 3.1 9.4 3.1 8.8 0 16-7.2 16-16V136h64v752z" />
  </svg>
);

Book.displayName = "Book";

export default Book;
