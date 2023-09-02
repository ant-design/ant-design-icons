// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RedEnvelopeFilledSvg from '@ant-design/icons-svg/lib/asn/RedEnvelopeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RedEnvelopeFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RedEnvelopeFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  RedEnvelopeFilled.displayName = 'RedEnvelopeFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RedEnvelopeFilled);