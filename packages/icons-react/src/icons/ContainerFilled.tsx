// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ContainerFilledSvg from '@ant-design/icons-svg/lib/asn/ContainerFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ContainerFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ContainerFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ContainerFilled.displayName = 'ContainerFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ContainerFilled);