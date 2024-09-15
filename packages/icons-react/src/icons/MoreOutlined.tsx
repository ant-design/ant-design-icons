// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MoreOutlinedSvg from '@ant-design/icons-svg/lib/asn/MoreOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoreOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MoreOutlinedSvg} />;

 /**![more](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQ1NiAyMzFhNTYgNTYgMCAxMDExMiAwIDU2IDU2IDAgMTAtMTEyIDB6bTAgMjgwYTU2IDU2IDAgMTAxMTIgMCA1NiA1NiAwIDEwLTExMiAwem0wIDI4MGE1NiA1NiAwIDEwMTEyIDAgNTYgNTYgMCAxMC0xMTIgMHoiIC8+PC9zdmc+) */ 
const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MoreOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MoreOutlined';
}

export default RefIcon;