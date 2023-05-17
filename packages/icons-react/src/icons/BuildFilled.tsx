// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BuildFilledSvg from '@ant-design/icons-svg/lib/asn/BuildFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BuildFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BuildFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BuildFilled.displayName = 'BuildFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BuildFilled);