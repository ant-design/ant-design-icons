import * as React from "react";

const Dropbox: React.SFC<object> = (props: object) => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path
      fill="currentColor"
      d="M512.5 248.5L246.8 412.7 512.5 577l265.2-164.3z"
    />
    <path d="M64 556.9l264.2 173.5L512.5 577 246.8 412.7zM960 266.6zM960 266.6L696.8 95 512.5 248.5l265.2 164.2L512.5 577l184.3 153.4L960 558.8 777.7 412.7z" />
    <path d="M513 609.8L328.2 763.3l-79.4-51.5v57.8L513 928l263.7-158.4v-57.8l-78.9 51.5zM328.2 95L64 265.1l182.8 147.6 265.7-164.2zM64 556.9z" />
  </svg>
);

Dropbox.displayName = "Dropbox";

export default Dropbox;
