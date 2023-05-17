// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SaveFilledSvg from '@ant-design/icons-svg/lib/asn/SaveFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SaveFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SaveFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SaveFilled.displayName = 'SaveFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SaveFilled);