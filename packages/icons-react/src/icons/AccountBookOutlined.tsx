// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AccountBookOutlinedSvg from '@ant-design/icons-svg/lib/asn/AccountBookOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AccountBookOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AccountBookOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AccountBookOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AccountBookOutlined';
}

export default RefIcon;