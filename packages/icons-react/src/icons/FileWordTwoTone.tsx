// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileWordTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileWordTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileWordTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileWordTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileWordTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileWordTwoTone';
}

export default RefIcon;