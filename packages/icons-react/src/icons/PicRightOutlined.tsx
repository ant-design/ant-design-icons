// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PicRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/PicRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PicRightOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PicRightOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PicRightOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PicRightOutlined';
}

export default RefIcon;