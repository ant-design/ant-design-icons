// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SettingFilledSvg from '@ant-design/icons-svg/lib/asn/SettingFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SettingFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SettingFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SettingFilled.displayName = 'SettingFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SettingFilled);