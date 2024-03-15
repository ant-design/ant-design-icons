// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileExcelFilledSvg from '@ant-design/icons-svg/lib/asn/FileExcelFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileExcelFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileExcelFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileExcelFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileExcelFilled';
}

export default RefIcon;