// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ItalicOutlinedSvg from '@ant-design/icons-svg/lib/asn/ItalicOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ItalicOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ItalicOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ItalicOutlined.displayName = 'ItalicOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ItalicOutlined);