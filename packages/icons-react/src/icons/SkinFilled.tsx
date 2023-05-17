// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SkinFilledSvg from '@ant-design/icons-svg/lib/asn/SkinFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SkinFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SkinFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SkinFilled.displayName = 'SkinFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SkinFilled);