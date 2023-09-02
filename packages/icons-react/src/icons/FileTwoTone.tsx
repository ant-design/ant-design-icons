// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FileTwoTone.displayName = 'FileTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FileTwoTone);