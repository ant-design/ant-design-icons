// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import IeOutlinedSvg from '@ant-design/icons-svg/lib/asn/IeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IeOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={IeOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(IeOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'IeOutlined';
}

export default RefIcon;