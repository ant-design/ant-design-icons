// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SkinFilledSvg from '@ant-design/icons-svg/lib/asn/SkinFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SkinFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SkinFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SkinFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SkinFilled';
}

export default RefIcon;