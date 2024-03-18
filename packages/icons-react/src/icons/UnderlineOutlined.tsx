// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UnderlineOutlinedSvg from '@ant-design/icons-svg/lib/asn/UnderlineOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UnderlineOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UnderlineOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(UnderlineOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UnderlineOutlined';
}

export default RefIcon;