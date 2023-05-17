// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PlayCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlayCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlayCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlayCircleOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PlayCircleOutlined.displayName = 'PlayCircleOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PlayCircleOutlined);