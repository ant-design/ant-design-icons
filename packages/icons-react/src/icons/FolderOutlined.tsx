// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FolderOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FolderOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FolderOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FolderOutlined';
}

export default RefIcon;