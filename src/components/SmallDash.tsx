import * as React from "react";

const SmallDash: React.SFC<object> = (props: object) => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path d="M112 476h72v72h-72zM294 476h72v72h-72zM658 476h72v72h-72zM840 476h72v72h-72zM476 476h72v72h-72z" />
  </svg>
);

SmallDash.displayName = "SmallDash";

export default SmallDash;
