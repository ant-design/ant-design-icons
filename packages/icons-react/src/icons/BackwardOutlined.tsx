// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BackwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/BackwardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BackwardOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BackwardOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BackwardOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BackwardOutlined';
}

export default RefIcon;