import * as React from "react";

const MailFill: React.SFC<object> = (props: object) => (
  <svg
    fill="currentColor"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M842.8 256H194c-4 0-7.2 3.2-7.2 7.2 0 2.2 1 4.3 2.8 5.7l315.6 245.6c7.8 6.1 18.7 6.1 26.5 0l315.6-245.6c3.1-2.4 3.7-7 1.3-10.1-1.5-1.8-3.6-2.8-5.8-2.8z"
      fill="none"
    />
    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9c-1.8-1.4-2.8-3.5-2.8-5.7 0-4 3.2-7.2 7.2-7.2h648.8c2.2 0 4.3 1 5.7 2.8 2.4 3.1 1.9 7.6-1.3 10.1z" />
  </svg>
);

MailFill.displayName = "MailFill";

export default MailFill;
