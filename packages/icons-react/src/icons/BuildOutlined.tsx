// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BuildOutlinedSvg from '@ant-design/icons-svg/lib/asn/BuildOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BuildOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BuildOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BuildOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BuildOutlined';
}

export default RefIcon;