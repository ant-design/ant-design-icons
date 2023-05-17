// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InstagramOutlinedSvg from '@ant-design/icons-svg/lib/asn/InstagramOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InstagramOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InstagramOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  InstagramOutlined.displayName = 'InstagramOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InstagramOutlined);