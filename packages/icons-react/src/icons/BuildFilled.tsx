// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BuildFilledSvg from '@ant-design/icons-svg/lib/asn/BuildFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BuildFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BuildFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BuildFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BuildFilled';
}

export default RefIcon;