// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InsuranceTwoToneSvg from '@ant-design/icons-svg/lib/asn/InsuranceTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InsuranceTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InsuranceTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(InsuranceTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'InsuranceTwoTone';
}

export default RefIcon;