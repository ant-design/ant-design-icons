// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileImageTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileImageTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileImageTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileImageTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileImageTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileImageTwoTone';
}

export default RefIcon;