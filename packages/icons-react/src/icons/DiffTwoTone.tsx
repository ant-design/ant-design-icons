// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DiffTwoToneSvg from '@ant-design/icons-svg/lib/asn/DiffTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DiffTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DiffTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  DiffTwoTone.displayName = 'DiffTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DiffTwoTone);