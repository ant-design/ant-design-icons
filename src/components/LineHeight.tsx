import * as React from "react";

const LineHeight: React.SFC<object> = (props: object) => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path d="M648 160H104c-4.4 0-8 3.6-8 8v128c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-64h168v560h-92c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-92V232h168v64c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zM920.8 706H856V318h64.8c6 0 9.4-7 5.7-11.7L825.7 178.7c-2.9-3.7-8.5-3.7-11.3 0L713.6 306.3c-3.7 4.7-.4 11.7 5.7 11.7H784v388h-64.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.8-4.7.4-11.7-5.6-11.7z" />
  </svg>
);

LineHeight.displayName = "LineHeight";

export default LineHeight;
