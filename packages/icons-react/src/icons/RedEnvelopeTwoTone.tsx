// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RedEnvelopeTwoToneSvg from '@ant-design/icons-svg/lib/asn/RedEnvelopeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RedEnvelopeTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RedEnvelopeTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(RedEnvelopeTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RedEnvelopeTwoTone';
}

export default RefIcon;