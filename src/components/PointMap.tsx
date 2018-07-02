import * as React from "react";

const PointMap: React.SFC<object> = (props: object) => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" />
    <circle cx={352} cy={604} r={64} />
    <circle cx={454} cy={380} r={48} />
    <circle cx={660} cy={608} r={96} />
    <circle cx={768} cy={294} r={56} />
  </svg>
);

PointMap.displayName = "PointMap";

export default PointMap;
