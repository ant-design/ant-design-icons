// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PlaySquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlaySquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlaySquareTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlaySquareTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PlaySquareTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PlaySquareTwoTone';
}

export default RefIcon;