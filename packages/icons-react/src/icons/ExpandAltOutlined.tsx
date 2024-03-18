// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ExpandAltOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExpandAltOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExpandAltOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ExpandAltOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ExpandAltOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ExpandAltOutlined';
}

export default RefIcon;