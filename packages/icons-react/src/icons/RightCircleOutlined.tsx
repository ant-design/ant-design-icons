// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RightCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/RightCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RightCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RightCircleOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(RightCircleOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RightCircleOutlined';
}

export default RefIcon;