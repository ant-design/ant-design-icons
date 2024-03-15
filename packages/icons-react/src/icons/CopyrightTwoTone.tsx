// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CopyrightTwoToneSvg from '@ant-design/icons-svg/lib/asn/CopyrightTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CopyrightTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CopyrightTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CopyrightTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CopyrightTwoTone';
}

export default RefIcon;