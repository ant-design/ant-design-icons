// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ExclamationCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/ExclamationCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExclamationCircleTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ExclamationCircleTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ExclamationCircleTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ExclamationCircleTwoTone';
}

export default RefIcon;