// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BranchesOutlinedSvg from '@ant-design/icons-svg/lib/asn/BranchesOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BranchesOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BranchesOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  BranchesOutlined.displayName = 'BranchesOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BranchesOutlined);