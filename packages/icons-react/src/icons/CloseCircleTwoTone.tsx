// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CloseCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloseCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloseCircleTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CloseCircleTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CloseCircleTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CloseCircleTwoTone';
}

export default RefIcon;