// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RightOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RightOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(RightOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RightOutlined';
}

export default RefIcon;