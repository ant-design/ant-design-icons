import * as React from "react";

const FileAdd: React.SFC<object> = (props: object) => (
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
      d="M534 352V136H232v752h560V394H576c-23.2 0-42-18.8-42-42zm126 236v48c0 4.4-3.6 8-8 8H544v108c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V644H372c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h108V472c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v108h108c4.4 0 8 3.6 8 8z"
    />
    <path className="st0" d="M602 326h188.2L602 137.8z" />
    <path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216c0 23.2 18.8 42 42 42h216v494z" />
    <path d="M544 472c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v108H372c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h108v108c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h108c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V472z" />
  </svg>
);

FileAdd.displayName = "FileAdd";

export default FileAdd;
