// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SettingTwoToneSvg from '@ant-design/icons-svg/lib/asn/SettingTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SettingTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SettingTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SettingTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SettingTwoTone';
}

export default RefIcon;