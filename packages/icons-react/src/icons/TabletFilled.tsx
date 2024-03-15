// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TabletFilledSvg from '@ant-design/icons-svg/lib/asn/TabletFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TabletFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TabletFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TabletFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TabletFilled';
}

export default RefIcon;