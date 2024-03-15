// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileExclamationTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileExclamationTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileExclamationTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileExclamationTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileExclamationTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileExclamationTwoTone';
}

export default RefIcon;