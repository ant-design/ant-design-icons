// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileMarkdownTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileMarkdownTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileMarkdownTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileMarkdownTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileMarkdownTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileMarkdownTwoTone';
}

export default RefIcon;