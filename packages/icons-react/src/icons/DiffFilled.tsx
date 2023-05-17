// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DiffFilledSvg from '@ant-design/icons-svg/lib/asn/DiffFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DiffFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DiffFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  DiffFilled.displayName = 'DiffFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DiffFilled);