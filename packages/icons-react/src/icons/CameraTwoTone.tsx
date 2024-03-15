// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CameraTwoToneSvg from '@ant-design/icons-svg/lib/asn/CameraTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CameraTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CameraTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CameraTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CameraTwoTone';
}

export default RefIcon;