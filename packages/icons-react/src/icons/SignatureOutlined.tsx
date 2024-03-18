// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SignatureOutlinedSvg from '@ant-design/icons-svg/lib/asn/SignatureOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SignatureOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SignatureOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SignatureOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SignatureOutlined';
}

export default RefIcon;