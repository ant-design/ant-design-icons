// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SignatureFilledSvg from '@ant-design/icons-svg/lib/asn/SignatureFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SignatureFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SignatureFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SignatureFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SignatureFilled';
}

export default RefIcon;