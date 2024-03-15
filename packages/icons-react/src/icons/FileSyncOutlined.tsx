// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileSyncOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileSyncOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileSyncOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileSyncOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileSyncOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileSyncOutlined';
}

export default RefIcon;