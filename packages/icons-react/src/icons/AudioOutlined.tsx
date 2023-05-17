// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AudioOutlinedSvg from '@ant-design/icons-svg/lib/asn/AudioOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AudioOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AudioOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  AudioOutlined.displayName = 'AudioOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AudioOutlined);