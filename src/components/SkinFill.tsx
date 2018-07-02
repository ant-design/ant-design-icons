import * as React from "react";

const SkinFill: React.SFC<object> = (props: object) => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path d="M870 126H663.8c-17.4 0-32.9 11.9-37 29.3C614.3 208.1 567 246 512 246s-102.3-37.9-114.8-90.7c-4.1-17.4-19.5-29.3-37-29.3H154c-24.3 0-44 19.7-44 44v252c0 24.3 19.7 44 44 44h75v388c0 24.3 19.7 44 44 44h478c24.3 0 44-19.7 44-44V466h75c24.3 0 44-19.7 44-44V170c0-24.3-19.7-44-44-44z" />
  </svg>
);

SkinFill.displayName = "SkinFill";

export default SkinFill;
