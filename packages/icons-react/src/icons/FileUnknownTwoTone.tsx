// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FileUnknownTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileUnknownTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileUnknownTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FileUnknownTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FileUnknownTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FileUnknownTwoTone';
}

export default RefIcon;