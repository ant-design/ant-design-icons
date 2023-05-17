// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MinusOutlinedSvg from '@ant-design/icons-svg/lib/asn/MinusOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MinusOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MinusOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  MinusOutlined.displayName = 'MinusOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MinusOutlined);