// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StarFilledSvg from '@ant-design/icons-svg/lib/asn/StarFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StarFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StarFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(StarFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'StarFilled';
}

export default RefIcon;