// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BuildTwoToneSvg from '@ant-design/icons-svg/lib/asn/BuildTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BuildTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BuildTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BuildTwoTone.displayName = 'BuildTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BuildTwoTone);