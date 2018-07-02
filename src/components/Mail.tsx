import * as React from "react";

const Mail: React.SFC<object> = (props: object) => (
  <svg id="图层_1" viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path className="st0" d="M833.6 232H190.4L512 482z" />
    <path
      className="st0"
      d="M477.6 536.4L136 270.8V792h752V270.8L546.4 536.4c-20.2 15.7-48.6 15.7-68.8 0z"
    />
    <path
      d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5z"
      fill="#010101"
    />
    <path d="M833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6c20.2 15.7 48.5 15.7 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" />
  </svg>
);

Mail.displayName = "Mail";

export default Mail;
