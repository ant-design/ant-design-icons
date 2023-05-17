// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ThunderboltFilledSvg from '@ant-design/icons-svg/lib/asn/ThunderboltFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ThunderboltFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ThunderboltFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ThunderboltFilled.displayName = 'ThunderboltFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ThunderboltFilled);