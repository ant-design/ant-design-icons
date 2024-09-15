// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SmallDashOutlinedSvg from '@ant-design/icons-svg/lib/asn/SmallDashOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SmallDashOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SmallDashOutlinedSvg} />;

 /**![small-dash](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExMiA0NzZoNzJ2NzJoLTcyem0xODIgMGg3MnY3MmgtNzJ6bTM2NCAwaDcydjcyaC03MnptMTgyIDBoNzJ2NzJoLTcyem0tMzY0IDBoNzJ2NzJoLTcyeiIgLz48L3N2Zz4=) */ 
const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SmallDashOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SmallDashOutlined';
}

export default RefIcon;