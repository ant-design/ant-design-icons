// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ApiFilledSvg from '@ant-design/icons-svg/lib/asn/ApiFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ApiFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ApiFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ApiFilled.displayName = 'ApiFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ApiFilled);