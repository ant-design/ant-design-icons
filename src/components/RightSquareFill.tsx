import * as React from "react";

const RightSquareFill: React.SFC<object> = (props: object) => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path
      d="M658.7 505.5l-246-178c-5.3-3.8-12.7 0-12.7 6.5v46.9c0 10.2 4.9 19.9 13.2 25.9L558.6 512 413.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"
      fill="currentColor"
    />
    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM658.7 518.5l-246 178c-5.3 3.8-12.7 0-12.7-6.5v-46.9c0-10.2 4.9-19.9 13.2-25.9L558.6 512 413.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.8 0 13z" />
  </svg>
);

RightSquareFill.displayName = "RightSquareFill";

export default RightSquareFill;
