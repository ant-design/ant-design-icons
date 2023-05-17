// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PlusOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlusOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlusOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlusOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PlusOutlined.displayName = 'PlusOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PlusOutlined);