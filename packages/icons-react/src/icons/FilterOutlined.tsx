// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FilterOutlinedSvg from '@ant-design/icons-svg/lib/asn/FilterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FilterOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FilterOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FilterOutlined.displayName = 'FilterOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FilterOutlined);