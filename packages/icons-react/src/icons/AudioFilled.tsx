// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AudioFilledSvg from '@ant-design/icons-svg/lib/asn/AudioFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AudioFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AudioFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  AudioFilled.displayName = 'AudioFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AudioFilled);