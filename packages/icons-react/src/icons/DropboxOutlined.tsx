// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DropboxOutlinedSvg from '@ant-design/icons-svg/lib/asn/DropboxOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DropboxOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DropboxOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DropboxOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DropboxOutlined';
}

export default RefIcon;