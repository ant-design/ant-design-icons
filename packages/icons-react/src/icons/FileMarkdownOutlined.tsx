// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileMarkdownOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileMarkdownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileMarkdownOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileMarkdownOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileMarkdownOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileMarkdownOutlined';
}

export default RefIcon;