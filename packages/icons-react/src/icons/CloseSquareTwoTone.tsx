// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CloseSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloseSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloseSquareTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CloseSquareTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CloseSquareTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CloseSquareTwoTone';
}

export default RefIcon;