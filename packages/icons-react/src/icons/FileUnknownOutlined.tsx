// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileUnknownOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileUnknownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileUnknownOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileUnknownOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileUnknownOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileUnknownOutlined';
}

export default RefIcon;