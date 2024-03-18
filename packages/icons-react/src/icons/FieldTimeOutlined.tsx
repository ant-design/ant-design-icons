// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FieldTimeOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldTimeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FieldTimeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FieldTimeOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FieldTimeOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FieldTimeOutlined';
}

export default RefIcon;