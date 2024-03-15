// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DropboxCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DropboxCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DropboxCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DropboxCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DropboxCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DropboxCircleFilled';
}

export default RefIcon;