// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import YoutubeOutlinedSvg from '@ant-design/icons-svg/lib/asn/YoutubeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const YoutubeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={YoutubeOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  YoutubeOutlined.displayName = 'YoutubeOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(YoutubeOutlined);