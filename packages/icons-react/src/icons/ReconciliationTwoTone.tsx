// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ReconciliationTwoToneSvg from '@ant-design/icons-svg/lib/asn/ReconciliationTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ReconciliationTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ReconciliationTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ReconciliationTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ReconciliationTwoTone';
}

export default RefIcon;