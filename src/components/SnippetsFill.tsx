import * as React from "react";

const SnippetsFill: React.SFC<object> = (props: object) => (
  <svg
    fill="currentColor"
    id="图层_1"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <path className="st0" d="M514 336v150h150v-.2L514.2 336z" />
    <path
      className="st0"
      d="M724 216c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-32H500v32c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-32h-68v80h184l192 192v304h56V184h-68v32z"
    />
    <path d="M832 112H724V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H500V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H320c-17.7 0-32 14.3-32 32v120h-96c-17.7 0-32 14.3-32 32v632c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM664 486H514V336h.2L664 485.8v.2zm128 274h-56V456L544 264H360v-80h68v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h152v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h68v576z" />
  </svg>
);

SnippetsFill.displayName = "SnippetsFill";

export default SnippetsFill;
