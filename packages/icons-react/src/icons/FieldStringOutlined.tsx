// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FieldStringOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldStringOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FieldStringOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FieldStringOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FieldStringOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FieldStringOutlined';
}

export default RefIcon;