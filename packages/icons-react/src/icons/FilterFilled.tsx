// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FilterFilledSvg from '@ant-design/icons-svg/lib/asn/FilterFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FilterFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FilterFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FilterFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FilterFilled';
}

export default RefIcon;