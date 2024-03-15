// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FolderOpenOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderOpenOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderOpenOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FolderOpenOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FolderOpenOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FolderOpenOutlined';
}

export default RefIcon;