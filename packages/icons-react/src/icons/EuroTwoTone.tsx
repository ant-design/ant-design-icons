// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EuroTwoToneSvg from '@ant-design/icons-svg/lib/asn/EuroTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EuroTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EuroTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(EuroTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'EuroTwoTone';
}

export default RefIcon;