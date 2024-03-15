// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TabletOutlinedSvg from '@ant-design/icons-svg/lib/asn/TabletOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TabletOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TabletOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TabletOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TabletOutlined';
}

export default RefIcon;