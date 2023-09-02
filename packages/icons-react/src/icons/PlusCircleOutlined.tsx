// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PlusCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlusCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlusCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlusCircleOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PlusCircleOutlined.displayName = 'PlusCircleOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PlusCircleOutlined);