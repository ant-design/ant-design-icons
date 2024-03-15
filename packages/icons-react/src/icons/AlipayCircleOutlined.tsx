// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AlipayCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlipayCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlipayCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AlipayCircleOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AlipayCircleOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AlipayCircleOutlined';
}

export default RefIcon;