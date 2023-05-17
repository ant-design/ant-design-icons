// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SlidersFilledSvg from '@ant-design/icons-svg/lib/asn/SlidersFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SlidersFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SlidersFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SlidersFilled.displayName = 'SlidersFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SlidersFilled);