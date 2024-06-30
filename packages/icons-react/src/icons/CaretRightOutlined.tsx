// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CaretRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaretRightOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CaretRightOutlinedSvg} />;

 /**![caret-right](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcxNS44IDQ5My41TDMzNSAxNjUuMWMtMTQuMi0xMi4yLTM1LTEuMi0zNSAxOC41djY1Ni44YzAgMTkuNyAyMC44IDMwLjcgMzUgMTguNWwzODAuOC0zMjguNGMxMC45LTkuNCAxMC45LTI3LjYgMC0zN3oiIC8+PC9zdmc+) */ 
const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CaretRightOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CaretRightOutlined';
}

export default RefIcon;