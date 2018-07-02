import * as React from "react";

const Ellipsis: React.SFC<object> = (props: object) => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <circle cx={232} cy={511} r={56} />
    <circle cx={512} cy={511} r={56} />
    <circle cx={792} cy={511} r={56} />
  </svg>
);

Ellipsis.displayName = "Ellipsis";

export default Ellipsis;
