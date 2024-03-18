// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ToolFilledSvg from '@ant-design/icons-svg/lib/asn/ToolFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ToolFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ToolFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ToolFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ToolFilled';
}

export default RefIcon;