// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TabletTwoToneSvg from '@ant-design/icons-svg/lib/asn/TabletTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TabletTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TabletTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TabletTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TabletTwoTone';
}

export default RefIcon;