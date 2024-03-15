// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileWordOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileWordOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileWordOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileWordOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileWordOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileWordOutlined';
}

export default RefIcon;