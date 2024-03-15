// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FolderFilledSvg from '@ant-design/icons-svg/lib/asn/FolderFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FolderFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FolderFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FolderFilled';
}

export default RefIcon;