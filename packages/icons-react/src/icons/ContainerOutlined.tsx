// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ContainerOutlinedSvg from '@ant-design/icons-svg/lib/asn/ContainerOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ContainerOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ContainerOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ContainerOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ContainerOutlined';
}

export default RefIcon;