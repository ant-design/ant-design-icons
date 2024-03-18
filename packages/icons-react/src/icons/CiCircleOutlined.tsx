// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CiCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CiCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CiCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CiCircleOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(CiCircleOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CiCircleOutlined';
}

export default RefIcon;