// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import QqOutlinedSvg from '@ant-design/icons-svg/lib/asn/QqOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QqOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={QqOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(QqOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'QqOutlined';
}

export default RefIcon;