// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ArrowDownOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowDownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowDownOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ArrowDownOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ArrowDownOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowDownOutlined';
}

export default RefIcon;