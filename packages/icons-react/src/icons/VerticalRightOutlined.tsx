// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import VerticalRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VerticalRightOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={VerticalRightOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(VerticalRightOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'VerticalRightOutlined';
}

export default RefIcon;