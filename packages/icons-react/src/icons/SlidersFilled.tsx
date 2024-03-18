// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SlidersFilledSvg from '@ant-design/icons-svg/lib/asn/SlidersFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SlidersFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SlidersFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SlidersFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SlidersFilled';
}

export default RefIcon;