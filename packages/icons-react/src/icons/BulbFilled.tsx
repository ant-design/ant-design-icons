// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BulbFilledSvg from '@ant-design/icons-svg/lib/asn/BulbFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BulbFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BulbFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BulbFilled.displayName = 'BulbFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BulbFilled);