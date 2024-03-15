// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FundViewOutlinedSvg from '@ant-design/icons-svg/lib/asn/FundViewOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FundViewOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FundViewOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FundViewOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FundViewOutlined';
}

export default RefIcon;