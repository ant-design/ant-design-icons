// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FolderAddFilledSvg from '@ant-design/icons-svg/lib/asn/FolderAddFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderAddFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FolderAddFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FolderAddFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FolderAddFilled';
}

export default RefIcon;