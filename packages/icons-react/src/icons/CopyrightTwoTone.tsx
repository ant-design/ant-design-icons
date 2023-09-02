// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CopyrightTwoToneSvg from '@ant-design/icons-svg/lib/asn/CopyrightTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CopyrightTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CopyrightTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  CopyrightTwoTone.displayName = 'CopyrightTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CopyrightTwoTone);