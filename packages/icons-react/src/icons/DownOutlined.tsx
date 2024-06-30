// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DownOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DownOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DownOutlinedSvg} />;

 /**![down](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg4NCAyNTZoLTc1Yy01LjEgMC05LjkgMi41LTEyLjkgNi42TDUxMiA2NTQuMiAyMjcuOSAyNjIuNmMtMy00LjEtNy44LTYuNi0xMi45LTYuNmgtNzVjLTYuNSAwLTEwLjMgNy40LTYuNSAxMi43bDM1Mi42IDQ4Ni4xYzEyLjggMTcuNiAzOSAxNy42IDUxLjcgMGwzNTIuNi00ODYuMWMzLjktNS4zLjEtMTIuNy02LjQtMTIuN3oiIC8+PC9zdmc+) */ 
const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DownOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DownOutlined';
}

export default RefIcon;