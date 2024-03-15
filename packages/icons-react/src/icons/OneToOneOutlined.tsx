// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import OneToOneOutlinedSvg from '@ant-design/icons-svg/lib/asn/OneToOneOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OneToOneOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OneToOneOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(OneToOneOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'OneToOneOutlined';
}

export default RefIcon;