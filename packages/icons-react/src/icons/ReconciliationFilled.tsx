// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ReconciliationFilledSvg from '@ant-design/icons-svg/lib/asn/ReconciliationFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ReconciliationFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ReconciliationFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ReconciliationFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ReconciliationFilled';
}

export default RefIcon;