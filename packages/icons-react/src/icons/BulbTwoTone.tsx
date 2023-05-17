// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BulbTwoToneSvg from '@ant-design/icons-svg/lib/asn/BulbTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BulbTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BulbTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BulbTwoTone.displayName = 'BulbTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BulbTwoTone);