// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BellFilledSvg from '@ant-design/icons-svg/lib/asn/BellFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BellFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BellFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BellFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BellFilled';
}

export default RefIcon;