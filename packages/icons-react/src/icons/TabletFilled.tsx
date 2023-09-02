// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TabletFilledSvg from '@ant-design/icons-svg/lib/asn/TabletFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TabletFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TabletFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  TabletFilled.displayName = 'TabletFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TabletFilled);