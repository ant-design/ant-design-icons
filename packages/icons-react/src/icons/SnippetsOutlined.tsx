// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SnippetsOutlinedSvg from '@ant-design/icons-svg/lib/asn/SnippetsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SnippetsOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SnippetsOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SnippetsOutlined.displayName = 'SnippetsOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SnippetsOutlined);