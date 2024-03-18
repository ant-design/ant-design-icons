// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ReloadOutlinedSvg from '@ant-design/icons-svg/lib/asn/ReloadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ReloadOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ReloadOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ReloadOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ReloadOutlined';
}

export default RefIcon;