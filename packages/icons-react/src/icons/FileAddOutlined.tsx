// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileAddOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileAddOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileAddOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileAddOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileAddOutlined';
}

export default RefIcon;