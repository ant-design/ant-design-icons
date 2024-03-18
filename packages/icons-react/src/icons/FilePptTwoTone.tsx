// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FilePptTwoToneSvg from '@ant-design/icons-svg/lib/asn/FilePptTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FilePptTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FilePptTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FilePptTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FilePptTwoTone';
}

export default RefIcon;