import * as React from "react";

const FolderOpen: React.SFC<object> = (props: object) => (
  <svg
    fill="currentColor"
    id="图层_1"
    viewBox="0 0 1024 1024"
    width="1em"
    height="1em"
    {...props}
  >
    <path className="st0" d="M159 768h612.3l103.3-256H262.3z" />
    <path
      className="st0"
      d="M238 444h510v-73.6H444.1L324.5 256H136v387.2L208.3 464c4.9-12.1 16.7-20 29.7-20z"
    />
    <path d="M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2c-1.5-1.4-3.5-2.2-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z" />
  </svg>
);

FolderOpen.displayName = "FolderOpen";

export default FolderOpen;
