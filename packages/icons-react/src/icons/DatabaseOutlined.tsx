// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DatabaseOutlinedSvg from '@ant-design/icons-svg/lib/asn/DatabaseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatabaseOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DatabaseOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DatabaseOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DatabaseOutlined';
}

export default RefIcon;