// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import IssuesCloseOutlinedSvg from '@ant-design/icons-svg/lib/asn/IssuesCloseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IssuesCloseOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={IssuesCloseOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  IssuesCloseOutlined.displayName = 'IssuesCloseOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(IssuesCloseOutlined);