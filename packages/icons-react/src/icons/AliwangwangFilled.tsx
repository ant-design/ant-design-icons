// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AliwangwangFilledSvg from '@ant-design/icons-svg/lib/asn/AliwangwangFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AliwangwangFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AliwangwangFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AliwangwangFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AliwangwangFilled';
}

export default RefIcon;