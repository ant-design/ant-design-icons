// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import PayCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PayCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PayCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PayCircleFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(PayCircleFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PayCircleFilled';
}

export default RefIcon;