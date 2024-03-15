// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ToTopOutlinedSvg from '@ant-design/icons-svg/lib/asn/ToTopOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ToTopOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ToTopOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ToTopOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ToTopOutlined';
}

export default RefIcon;