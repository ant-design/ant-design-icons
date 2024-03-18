// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UngroupOutlinedSvg from '@ant-design/icons-svg/lib/asn/UngroupOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UngroupOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UngroupOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(UngroupOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UngroupOutlined';
}

export default RefIcon;