// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TaobaoCircleFilledSvg from '@ant-design/icons-svg/lib/asn/TaobaoCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TaobaoCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TaobaoCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TaobaoCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TaobaoCircleFilled';
}

export default RefIcon;