// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileTextOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileTextOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileTextOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileTextOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileTextOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileTextOutlined';
}

export default RefIcon;