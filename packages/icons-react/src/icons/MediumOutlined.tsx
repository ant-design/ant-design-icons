// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MediumOutlinedSvg from '@ant-design/icons-svg/lib/asn/MediumOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MediumOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MediumOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MediumOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MediumOutlined';
}

export default RefIcon;