// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ClearOutlinedSvg from '@ant-design/icons-svg/lib/asn/ClearOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClearOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ClearOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ClearOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ClearOutlined';
}

export default RefIcon;