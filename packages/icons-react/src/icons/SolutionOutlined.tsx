// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SolutionOutlinedSvg from '@ant-design/icons-svg/lib/asn/SolutionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SolutionOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SolutionOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SolutionOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SolutionOutlined';
}

export default RefIcon;