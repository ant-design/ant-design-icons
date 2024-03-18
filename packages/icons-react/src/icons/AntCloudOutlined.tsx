// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AntCloudOutlinedSvg from '@ant-design/icons-svg/lib/asn/AntCloudOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AntCloudOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AntCloudOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AntCloudOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AntCloudOutlined';
}

export default RefIcon;