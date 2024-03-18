// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BugTwoToneSvg from '@ant-design/icons-svg/lib/asn/BugTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BugTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BugTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BugTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BugTwoTone';
}

export default RefIcon;