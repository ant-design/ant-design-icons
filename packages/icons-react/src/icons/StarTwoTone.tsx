// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StarTwoToneSvg from '@ant-design/icons-svg/lib/asn/StarTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StarTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StarTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(StarTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'StarTwoTone';
}

export default RefIcon;