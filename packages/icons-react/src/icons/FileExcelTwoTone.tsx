// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileExcelTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileExcelTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileExcelTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileExcelTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileExcelTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileExcelTwoTone';
}

export default RefIcon;