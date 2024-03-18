// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ReconciliationOutlinedSvg from '@ant-design/icons-svg/lib/asn/ReconciliationOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ReconciliationOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ReconciliationOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ReconciliationOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ReconciliationOutlined';
}

export default RefIcon;