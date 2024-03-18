// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HarmonyOSOutlinedSvg from '@ant-design/icons-svg/lib/asn/HarmonyOSOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HarmonyOSOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HarmonyOSOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(HarmonyOSOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'HarmonyOSOutlined';
}

export default RefIcon;