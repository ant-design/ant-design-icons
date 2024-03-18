// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import Loading3QuartersOutlinedSvg from '@ant-design/icons-svg/lib/asn/Loading3QuartersOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Loading3QuartersOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={Loading3QuartersOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(Loading3QuartersOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'Loading3QuartersOutlined';
}

export default RefIcon;