// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RadiusSettingOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusSettingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RadiusSettingOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RadiusSettingOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(RadiusSettingOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RadiusSettingOutlined';
}

export default RefIcon;