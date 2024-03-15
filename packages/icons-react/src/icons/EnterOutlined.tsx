// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import EnterOutlinedSvg from '@ant-design/icons-svg/lib/asn/EnterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EnterOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EnterOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(EnterOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'EnterOutlined';
}

export default RefIcon;