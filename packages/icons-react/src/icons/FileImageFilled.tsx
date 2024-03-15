// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileImageFilledSvg from '@ant-design/icons-svg/lib/asn/FileImageFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileImageFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileImageFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileImageFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileImageFilled';
}

export default RefIcon;