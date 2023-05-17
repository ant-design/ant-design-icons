// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import YoutubeFilledSvg from '@ant-design/icons-svg/lib/asn/YoutubeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const YoutubeFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={YoutubeFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  YoutubeFilled.displayName = 'YoutubeFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(YoutubeFilled);