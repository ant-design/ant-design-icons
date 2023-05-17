// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PictureOutlinedSvg from '@ant-design/icons-svg/lib/asn/PictureOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PictureOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PictureOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PictureOutlined.displayName = 'PictureOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PictureOutlined);