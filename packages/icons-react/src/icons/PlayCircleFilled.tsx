// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PlayCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PlayCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlayCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlayCircleFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PlayCircleFilled.displayName = 'PlayCircleFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PlayCircleFilled);