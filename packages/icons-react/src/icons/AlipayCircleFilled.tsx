// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AlipayCircleFilledSvg from '@ant-design/icons-svg/lib/asn/AlipayCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlipayCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AlipayCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AlipayCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AlipayCircleFilled';
}

export default RefIcon;