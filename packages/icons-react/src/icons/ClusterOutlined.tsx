// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ClusterOutlinedSvg from '@ant-design/icons-svg/lib/asn/ClusterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClusterOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ClusterOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ClusterOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ClusterOutlined';
}

export default RefIcon;