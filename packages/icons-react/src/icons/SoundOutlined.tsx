// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SoundOutlinedSvg from '@ant-design/icons-svg/lib/asn/SoundOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SoundOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SoundOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SoundOutlined.displayName = 'SoundOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SoundOutlined);