// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileTextFilledSvg from '@ant-design/icons-svg/lib/asn/FileTextFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileTextFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileTextFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileTextFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileTextFilled';
}

export default RefIcon;