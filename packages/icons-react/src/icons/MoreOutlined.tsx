// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MoreOutlinedSvg from '@ant-design/icons-svg/lib/asn/MoreOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoreOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MoreOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MoreOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MoreOutlined';
}

export default RefIcon;