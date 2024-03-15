// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import UploadOutlinedSvg from '@ant-design/icons-svg/lib/asn/UploadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UploadOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UploadOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(UploadOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UploadOutlined';
}

export default RefIcon;