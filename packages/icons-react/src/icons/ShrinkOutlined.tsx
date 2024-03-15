// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ShrinkOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShrinkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ShrinkOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ShrinkOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ShrinkOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ShrinkOutlined';
}

export default RefIcon;