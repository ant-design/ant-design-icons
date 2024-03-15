// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ToolTwoToneSvg from '@ant-design/icons-svg/lib/asn/ToolTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ToolTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ToolTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ToolTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ToolTwoTone';
}

export default RefIcon;