// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import YuqueOutlinedSvg from '@ant-design/icons-svg/lib/asn/YuqueOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const YuqueOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={YuqueOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(YuqueOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'YuqueOutlined';
}

export default RefIcon;