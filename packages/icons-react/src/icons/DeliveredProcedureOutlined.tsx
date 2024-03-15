// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DeliveredProcedureOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeliveredProcedureOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DeliveredProcedureOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DeliveredProcedureOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DeliveredProcedureOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DeliveredProcedureOutlined';
}

export default RefIcon;