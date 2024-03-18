// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileExclamationOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileExclamationOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileExclamationOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileExclamationOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileExclamationOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileExclamationOutlined';
}

export default RefIcon;