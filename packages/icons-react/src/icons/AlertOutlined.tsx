// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AlertOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlertOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlertOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AlertOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AlertOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AlertOutlined';
}

export default RefIcon;