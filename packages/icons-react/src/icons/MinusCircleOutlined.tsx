// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MinusCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/MinusCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MinusCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MinusCircleOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  MinusCircleOutlined.displayName = 'MinusCircleOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MinusCircleOutlined);