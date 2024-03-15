// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FundTwoToneSvg from '@ant-design/icons-svg/lib/asn/FundTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FundTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FundTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FundTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FundTwoTone';
}

export default RefIcon;