// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FolderOpenFilledSvg from '@ant-design/icons-svg/lib/asn/FolderOpenFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderOpenFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FolderOpenFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FolderOpenFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FolderOpenFilled';
}

export default RefIcon;