// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileZipTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileZipTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileZipTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileZipTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileZipTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileZipTwoTone';
}

export default RefIcon;