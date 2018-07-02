import * as React from "react";

const CodeSandboxCircleFill: React.SFC<object> = (props: object) => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path
      d="M645.8 308h.2l-134-77-133.9 77h-.2l.4.2-110 63.6v281.5L512 794l243.7-140.8V371.8l-110.1-63.6.2-.2zM492.2 736.9L395.5 681v-94.5l-87.6-49.8V418.4l184.3 106.4v212.1zm223.9-199.8l-87 49.5v94.1l-97.3 56.2V525l184.3-106.5v118.6zm-18.8-153.4L512.1 490.6l-185.2-107L418 331l93.9 53.9 94-54 91.4 52.8z"
      fill="currentColor"
    />
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm243.7 589.2L512 794 268.3 653.2V371.8l110-63.6-.4-.2h.2L512 231l134 77h-.2l-.3.2 110.1 63.6v281.4z" />
    <path d="M307.9 536.7l87.6 49.9V681l96.7 55.9V524.8L307.9 418.4zM511.8 384.9L418 331l-91.1 52.6 185.2 107 185.2-106.9-91.4-52.8zM531.8 736.9l97.3-56.2v-94.1l87-49.5V418.5L531.8 525z" />
  </svg>
);

CodeSandboxCircleFill.displayName = "CodeSandboxCircleFill";

export default CodeSandboxCircleFill;
