// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AlipayOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlipayOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlipayOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AlipayOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AlipayOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AlipayOutlined';
}

export default RefIcon;