// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileAddFilledSvg from '@ant-design/icons-svg/lib/asn/FileAddFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileAddFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileAddFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileAddFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileAddFilled';
}

export default RefIcon;