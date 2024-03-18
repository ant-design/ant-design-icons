// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PercentageOutlinedSvg from '@ant-design/icons-svg/lib/asn/PercentageOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PercentageOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PercentageOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PercentageOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PercentageOutlined';
}

export default RefIcon;