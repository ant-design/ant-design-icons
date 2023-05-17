// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BulbOutlinedSvg from '@ant-design/icons-svg/lib/asn/BulbOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BulbOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BulbOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BulbOutlined.displayName = 'BulbOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BulbOutlined);