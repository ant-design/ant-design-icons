// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AudioMutedOutlinedSvg from '@ant-design/icons-svg/lib/asn/AudioMutedOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AudioMutedOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AudioMutedOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  AudioMutedOutlined.displayName = 'AudioMutedOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AudioMutedOutlined);