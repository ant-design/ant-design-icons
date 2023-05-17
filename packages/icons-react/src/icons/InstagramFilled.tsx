// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InstagramFilledSvg from '@ant-design/icons-svg/lib/asn/InstagramFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InstagramFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InstagramFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  InstagramFilled.displayName = 'InstagramFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InstagramFilled);