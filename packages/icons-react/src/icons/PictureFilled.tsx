// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PictureFilledSvg from '@ant-design/icons-svg/lib/asn/PictureFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PictureFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PictureFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PictureFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PictureFilled';
}

export default RefIcon;