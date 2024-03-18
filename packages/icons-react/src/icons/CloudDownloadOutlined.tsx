// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CloudDownloadOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudDownloadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloudDownloadOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CloudDownloadOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CloudDownloadOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CloudDownloadOutlined';
}

export default RefIcon;