// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PlusCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PlusCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlusCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlusCircleFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  PlusCircleFilled.displayName = 'PlusCircleFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PlusCircleFilled);