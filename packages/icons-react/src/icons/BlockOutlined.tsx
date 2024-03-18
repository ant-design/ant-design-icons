// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BlockOutlinedSvg from '@ant-design/icons-svg/lib/asn/BlockOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BlockOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BlockOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BlockOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BlockOutlined';
}

export default RefIcon;