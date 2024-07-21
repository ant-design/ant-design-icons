// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PauseOutlinedSvg from '@ant-design/icons-svg/lib/asn/PauseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PauseOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PauseOutlinedSvg} />;

 /**![pause](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMwNCAxNzZoODB2NjcyaC04MHptNDA4IDBoLTY0Yy00LjQgMC04IDMuNi04IDh2NjU2YzAgNC40IDMuNiA4IDggOGg2NGM0LjQgMCA4LTMuNiA4LThWMTg0YzAtNC40LTMuNi04LTgtOHoiIC8+PC9zdmc+) */ 
const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PauseOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PauseOutlined';
}

export default RefIcon;