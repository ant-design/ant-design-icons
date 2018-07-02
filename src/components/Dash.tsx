import * as React from "react";

const Dash: React.SFC<object> = (props: object) => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path d="M112 476h160v72H112zM432 476h160v72H432zM752 476h160v72H752z" />
  </svg>
);

Dash.displayName = "Dash";

export default Dash;
