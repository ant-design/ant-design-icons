import * as React from "react";

const Database: React.SFC<object> = (props: object) => (
  <svg id="图层_1" viewBox="0 0 1024 1024" width="1em" height="1em" {...props}>
    <path
      className="st0"
      d="M232 616h560V408H232v208zm112-144c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM792 136H232v208h560V136zM344 280c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zM232 888h560V680H232v208zm112-144c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z"
    />
    <path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208z" />
    <circle cx={344} cy={240} r={40} />
    <circle cx={344} cy={512} r={40} />
    <circle cx={344} cy={784} r={40} />
  </svg>
);

Database.displayName = "Database";

export default Database;
