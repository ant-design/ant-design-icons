// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import KubernetesOutlinedSvg from '@ant-design/icons-svg/lib/asn/KubernetesOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const KubernetesOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={KubernetesOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(KubernetesOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'KubernetesOutlined';
}

export default RefIcon;