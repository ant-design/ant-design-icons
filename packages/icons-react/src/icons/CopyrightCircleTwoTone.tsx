// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CopyrightCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/CopyrightCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CopyrightCircleTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CopyrightCircleTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CopyrightCircleTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CopyrightCircleTwoTone';
}

export default RefIcon;