// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DatabaseTwoToneSvg from '@ant-design/icons-svg/lib/asn/DatabaseTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatabaseTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DatabaseTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  DatabaseTwoTone.displayName = 'DatabaseTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DatabaseTwoTone);