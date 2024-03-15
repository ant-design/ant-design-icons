// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CloudUploadOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudUploadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloudUploadOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CloudUploadOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CloudUploadOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CloudUploadOutlined';
}

export default RefIcon;