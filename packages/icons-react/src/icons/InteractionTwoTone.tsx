// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InteractionTwoToneSvg from '@ant-design/icons-svg/lib/asn/InteractionTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InteractionTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InteractionTwoToneSvg} />;

if (process.env.NODE_ENV !== 'production') {
  InteractionTwoTone.displayName = 'InteractionTwoTone';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InteractionTwoTone);