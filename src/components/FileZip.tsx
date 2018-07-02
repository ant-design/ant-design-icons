import * as React from "react";

const FileZip: React.SFC<object> = (props: object) => (
  <svg
    fill="currentColor"
    id="图层_1"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <path className="st0" d="M602 326h188.2L602 137.8zM344 630h32v64h-32z" />
    <path
      className="st0"
      d="M534 352V136H360v64h64v64h-64v64h64v64h-64v64h64v64h-64v62h64v160H296V520h64v-64h-64v-64h64v-64h-64v-64h64v-64h-64v-64h-64v752h560V394H576c-23.2 0-42-18.8-42-42z"
    />
    <path d="M296 392h64v64h-64zM296 582v160h128V582h-64v-62h-64v62zm80 48v64h-32v-64h32zM360 328h64v64h-64zM296 264h64v64h-64zM360 456h64v64h-64zM360 200h64v64h-64z" />
    <path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h64v64h64v-64h174v216c0 23.2 18.8 42 42 42h216v494z" />
  </svg>
);

FileZip.displayName = "FileZip";

export default FileZip;
