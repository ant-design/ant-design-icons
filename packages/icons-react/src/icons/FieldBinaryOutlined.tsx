// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import FieldBinaryOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldBinaryOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FieldBinaryOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FieldBinaryOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(FieldBinaryOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FieldBinaryOutlined';
}

export default RefIcon;