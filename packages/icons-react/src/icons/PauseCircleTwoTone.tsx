// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PauseCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PauseCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PauseCircleTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PauseCircleTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PauseCircleTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PauseCircleTwoTone';
}

export default RefIcon;