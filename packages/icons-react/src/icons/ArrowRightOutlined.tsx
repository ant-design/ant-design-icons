// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ArrowRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowRightOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ArrowRightOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ArrowRightOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowRightOutlined';
}

export default RefIcon;