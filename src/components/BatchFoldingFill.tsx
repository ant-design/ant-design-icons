import * as React from "react";

const BatchFoldingFill: React.SFC<object> = (props: object) => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path
      d="M588 550H308c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h280c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"
      fill="currentColor"
    />
    <path d="M752 240H144c-17.7 0-32 14.3-32 32v608c0 17.7 14.3 32 32 32h608c17.7 0 32-14.3 32-32V272c0-17.7-14.3-32-32-32zM596 606c0 4.4-3.6 8-8 8H308c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h280c4.4 0 8 3.6 8 8v48z" />
    <path d="M880 112H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h576v576c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32z" />
  </svg>
);

BatchFoldingFill.displayName = "BatchFoldingFill";

export default BatchFoldingFill;
