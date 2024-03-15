// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileOutlined';
}

export default RefIcon;