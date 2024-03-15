// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InsuranceFilledSvg from '@ant-design/icons-svg/lib/asn/InsuranceFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InsuranceFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InsuranceFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(InsuranceFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'InsuranceFilled';
}

export default RefIcon;