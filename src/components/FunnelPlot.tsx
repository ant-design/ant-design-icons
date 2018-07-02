import * as React from "react";

const FunnelPlot: React.SFC<object> = (props: object) => (
  <svg
    fill="currentColor"
    id="图层_1"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      className="st0"
      d="M411 571.4l8.3 14.6h185.4l8.3-14.6L689.6 438H334.4zM420.6 650h182.9v148H420.6zM297.7 374h428.6l85-148H212.7z"
    />
    <path d="M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 607.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V607.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V650h182.9v148zm9.6-226.6l-8.4 14.6H419.3l-8.4-14.6L334.4 438h355.2L613 571.4zM726.3 374H297.7l-85-148h598.6l-85 148z" />
  </svg>
);

FunnelPlot.displayName = "FunnelPlot";

export default FunnelPlot;
