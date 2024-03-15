// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileTextTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileTextTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileTextTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileTextTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileTextTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileTextTwoTone';
}

export default RefIcon;