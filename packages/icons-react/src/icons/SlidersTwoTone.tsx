// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SlidersTwoToneSvg from '@ant-design/icons-svg/lib/asn/SlidersTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SlidersTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SlidersTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SlidersTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SlidersTwoTone';
}

export default RefIcon;