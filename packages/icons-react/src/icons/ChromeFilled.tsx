// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ChromeFilledSvg from '@ant-design/icons-svg/lib/asn/ChromeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChromeFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ChromeFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ChromeFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChromeFilled';
}

export default RefIcon;