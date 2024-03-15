// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ForwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/ForwardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ForwardOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ForwardOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ForwardOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ForwardOutlined';
}

export default RefIcon;