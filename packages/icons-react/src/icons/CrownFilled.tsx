// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CrownFilledSvg from '@ant-design/icons-svg/lib/asn/CrownFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CrownFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CrownFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CrownFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CrownFilled';
}

export default RefIcon;