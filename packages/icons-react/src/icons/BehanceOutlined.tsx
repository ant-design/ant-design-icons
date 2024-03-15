// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BehanceOutlinedSvg from '@ant-design/icons-svg/lib/asn/BehanceOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BehanceOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BehanceOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BehanceOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BehanceOutlined';
}

export default RefIcon;