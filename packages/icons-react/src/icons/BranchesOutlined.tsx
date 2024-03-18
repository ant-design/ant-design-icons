// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BranchesOutlinedSvg from '@ant-design/icons-svg/lib/asn/BranchesOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BranchesOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BranchesOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BranchesOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BranchesOutlined';
}

export default RefIcon;