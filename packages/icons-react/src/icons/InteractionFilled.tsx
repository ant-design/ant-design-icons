// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InteractionFilledSvg from '@ant-design/icons-svg/lib/asn/InteractionFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InteractionFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InteractionFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  InteractionFilled.displayName = 'InteractionFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InteractionFilled);