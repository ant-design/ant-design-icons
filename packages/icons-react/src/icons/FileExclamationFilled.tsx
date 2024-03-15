// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileExclamationFilledSvg from '@ant-design/icons-svg/lib/asn/FileExclamationFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileExclamationFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileExclamationFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileExclamationFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileExclamationFilled';
}

export default RefIcon;