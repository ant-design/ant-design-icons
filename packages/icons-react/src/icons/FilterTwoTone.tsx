// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FilterTwoToneSvg from '@ant-design/icons-svg/lib/asn/FilterTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FilterTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FilterTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FilterTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FilterTwoTone';
}

export default RefIcon;