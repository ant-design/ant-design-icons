// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SyncOutlinedSvg from '@ant-design/icons-svg/lib/asn/SyncOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SyncOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SyncOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SyncOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SyncOutlined';
}

export default RefIcon;