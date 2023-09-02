// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MinusCircleFilledSvg from '@ant-design/icons-svg/lib/asn/MinusCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MinusCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MinusCircleFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  MinusCircleFilled.displayName = 'MinusCircleFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MinusCircleFilled);