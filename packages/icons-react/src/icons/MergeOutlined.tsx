// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MergeOutlinedSvg from '@ant-design/icons-svg/lib/asn/MergeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MergeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MergeOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MergeOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MergeOutlined';
}

export default RefIcon;