// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MehOutlinedSvg from '@ant-design/icons-svg/lib/asn/MehOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MehOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MehOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MehOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MehOutlined';
}

export default RefIcon;