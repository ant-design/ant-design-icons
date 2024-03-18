// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileExcelOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileExcelOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileExcelOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileExcelOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileExcelOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileExcelOutlined';
}

export default RefIcon;