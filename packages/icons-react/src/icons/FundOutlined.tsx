// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FundOutlinedSvg from '@ant-design/icons-svg/lib/asn/FundOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FundOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FundOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FundOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FundOutlined';
}

export default RefIcon;