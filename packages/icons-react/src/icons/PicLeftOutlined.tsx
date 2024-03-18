// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PicLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/PicLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PicLeftOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PicLeftOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PicLeftOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PicLeftOutlined';
}

export default RefIcon;