// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PictureTwoToneSvg from '@ant-design/icons-svg/lib/asn/PictureTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PictureTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PictureTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PictureTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PictureTwoTone';
}

export default RefIcon;