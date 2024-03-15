// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UnlockOutlinedSvg from '@ant-design/icons-svg/lib/asn/UnlockOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UnlockOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UnlockOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(UnlockOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UnlockOutlined';
}

export default RefIcon;