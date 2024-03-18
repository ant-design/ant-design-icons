// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileGifOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileGifOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileGifOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileGifOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileGifOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileGifOutlined';
}

export default RefIcon;