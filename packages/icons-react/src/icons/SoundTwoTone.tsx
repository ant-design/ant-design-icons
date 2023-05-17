// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SoundTwoToneSvg from '@ant-design/icons-svg/lib/asn/SoundTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SoundTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SoundTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SoundTwoTone.displayName = 'SoundTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SoundTwoTone);