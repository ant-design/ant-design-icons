// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FieldNumberOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldNumberOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FieldNumberOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FieldNumberOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FieldNumberOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FieldNumberOutlined';
}

export default RefIcon;