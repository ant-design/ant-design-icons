// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import Html5TwoToneSvg from '@ant-design/icons-svg/lib/asn/Html5TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Html5TwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={Html5TwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(Html5TwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'Html5TwoTone';
}

export default RefIcon;