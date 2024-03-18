// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FolderTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FolderTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FolderTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FolderTwoTone';
}

export default RefIcon;