// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StopFilledSvg from '@ant-design/icons-svg/lib/asn/StopFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StopFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StopFilledSvg} />;

 /**![stop](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0yMzQuOCA3MzYuNUwyMjMuNSAyNzcuMmMxNi0xOS43IDM0LTM3LjcgNTMuNy01My43bDUyMy4zIDUyMy4zYy0xNiAxOS42LTM0IDM3LjctNTMuNyA1My43eiIgLz48L3N2Zz4=) */ 
const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(StopFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'StopFilled';
}

export default RefIcon;