// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FunctionOutlinedSvg from '@ant-design/icons-svg/lib/asn/FunctionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FunctionOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FunctionOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FunctionOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FunctionOutlined';
}

export default RefIcon;