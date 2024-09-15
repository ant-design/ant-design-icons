// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PlusOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlusOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlusOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlusOutlinedSvg} />;

 /**![plus](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQ4MiAxNTJoNjBxOCAwIDggOHY3MDRxMCA4LTggOGgtNjBxLTggMC04LThWMTYwcTAtOCA4LTh6IiAvPjxwYXRoIGQ9Ik0xOTIgNDc0aDY3MnE4IDAgOCA4djYwcTAgOC04IDhIMTYwcS04IDAtOC04di02MHEwLTggOC04eiIgLz48L3N2Zz4=) */ 
const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PlusOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PlusOutlined';
}

export default RefIcon;