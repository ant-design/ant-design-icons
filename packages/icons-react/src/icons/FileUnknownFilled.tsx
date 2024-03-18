// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileUnknownFilledSvg from '@ant-design/icons-svg/lib/asn/FileUnknownFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileUnknownFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileUnknownFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileUnknownFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileUnknownFilled';
}

export default RefIcon;