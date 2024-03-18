// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EuroCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/EuroCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EuroCircleTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EuroCircleTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(EuroCircleTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'EuroCircleTwoTone';
}

export default RefIcon;