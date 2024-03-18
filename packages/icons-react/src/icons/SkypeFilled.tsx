// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SkypeFilledSvg from '@ant-design/icons-svg/lib/asn/SkypeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SkypeFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SkypeFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SkypeFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SkypeFilled';
}

export default RefIcon;