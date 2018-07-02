import * as React from "react";

const SeverFill: React.SFC<object> = (props: object) => (
  <svg id="图层_1" viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <circle className="st0" cx={736} cy={832} r={40} />
    <path
      className="st0"
      d="M264 544h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H264c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM448 160H264c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"
    />
    <path d="M832 64H192c-17.7 0-32 14.3-32 32v224h704V96c0-17.7-14.3-32-32-32zM456 216c0 4.4-3.6 8-8 8H264c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48zM160 928c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V704H160v224zm576-136c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM160 640h704V384H160v256zm96-152c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H264c-4.4 0-8-3.6-8-8v-48z" />
  </svg>
);

SeverFill.displayName = "SeverFill";

export default SeverFill;
