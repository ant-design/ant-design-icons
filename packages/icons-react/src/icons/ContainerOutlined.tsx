// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ContainerOutlinedSvg from '@ant-design/icons-svg/lib/asn/ContainerOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ContainerOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ContainerOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ContainerOutlined.displayName = 'ContainerOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ContainerOutlined);