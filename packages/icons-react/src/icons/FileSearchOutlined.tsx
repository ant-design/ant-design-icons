// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileSearchOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileSearchOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileSearchOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileSearchOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileSearchOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileSearchOutlined';
}

export default RefIcon;