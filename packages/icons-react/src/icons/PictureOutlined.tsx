// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PictureOutlinedSvg from '@ant-design/icons-svg/lib/asn/PictureOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PictureOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PictureOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PictureOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PictureOutlined';
}

export default RefIcon;