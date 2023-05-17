// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import IdcardFilledSvg from '@ant-design/icons-svg/lib/asn/IdcardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IdcardFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={IdcardFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  IdcardFilled.displayName = 'IdcardFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(IdcardFilled);