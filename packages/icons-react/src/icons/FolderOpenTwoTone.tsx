// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FolderOpenTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderOpenTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderOpenTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FolderOpenTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FolderOpenTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FolderOpenTwoTone';
}

export default RefIcon;