// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileJpgOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileJpgOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileJpgOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileJpgOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileJpgOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileJpgOutlined';
}

export default RefIcon;