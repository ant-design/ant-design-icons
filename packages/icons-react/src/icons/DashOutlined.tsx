// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DashOutlinedSvg from '@ant-design/icons-svg/lib/asn/DashOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DashOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DashOutlinedSvg} />;

 /**![dash](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExMiA0NzZoMTYwdjcySDExMnptMzIwIDBoMTYwdjcySDQzMnptMzIwIDBoMTYwdjcySDc1MnoiIC8+PC9zdmc+) */ 
const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DashOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DashOutlined';
}

export default RefIcon;