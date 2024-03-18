// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BugFilledSvg from '@ant-design/icons-svg/lib/asn/BugFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BugFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BugFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BugFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BugFilled';
}

export default RefIcon;