// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SettingOutlinedSvg from '@ant-design/icons-svg/lib/asn/SettingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SettingOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SettingOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SettingOutlined.displayName = 'SettingOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SettingOutlined);