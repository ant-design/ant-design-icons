// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MacCommandFilledSvg from '@ant-design/icons-svg/lib/asn/MacCommandFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MacCommandFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MacCommandFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MacCommandFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MacCommandFilled';
}

export default RefIcon;