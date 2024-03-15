// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import VerifiedOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerifiedOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VerifiedOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={VerifiedOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(VerifiedOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'VerifiedOutlined';
}

export default RefIcon;