import * as React from "react";

const Html5Fill: React.SFC<object> = (props: object) => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path
      fill="currentColor"
      d="M281.6 248.8l1.7 24.3L306 526.6h204.9v.1h113.8l-11.4 118.5-102.1 27.6h-.4l-102.4-27.6-6.5-73.2h-91.1l11.4 144.7 188.6 52h.1v.1l.3-.1h1.3v-.4l187-51.5 1.7-16.3 21.2-242.2 3.2-24.3H390.5l-8.2-94.2h351.4l1.7-19.6 4.8-47.1 1.7-24.3H512.4z"
    />
    <path d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z" />
  </svg>
);

Html5Fill.displayName = "Html5Fill";

export default Html5Fill;
