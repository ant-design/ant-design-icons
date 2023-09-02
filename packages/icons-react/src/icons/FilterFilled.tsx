// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FilterFilledSvg from '@ant-design/icons-svg/lib/asn/FilterFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FilterFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FilterFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  FilterFilled.displayName = 'FilterFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FilterFilled);