// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ContainerFilledSvg from '@ant-design/icons-svg/lib/asn/ContainerFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ContainerFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ContainerFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ContainerFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ContainerFilled';
}

export default RefIcon;