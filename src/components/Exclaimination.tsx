import * as React from "react";

const Exclaimination: React.SFC<object> = (props: object) => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <circle cx={512} cy={804} r={64} />
    <path d="M480 636h64c4.4 0 8-3.6 8-8V164c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8z" />
  </svg>
);

Exclaimination.displayName = "Exclaimination";

export default Exclaimination;
