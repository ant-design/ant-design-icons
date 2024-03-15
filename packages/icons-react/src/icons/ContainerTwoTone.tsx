// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ContainerTwoToneSvg from '@ant-design/icons-svg/lib/asn/ContainerTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ContainerTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ContainerTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ContainerTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ContainerTwoTone';
}

export default RefIcon;