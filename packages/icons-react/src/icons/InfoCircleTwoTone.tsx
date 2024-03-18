// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InfoCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/InfoCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InfoCircleTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InfoCircleTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(InfoCircleTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'InfoCircleTwoTone';
}

export default RefIcon;