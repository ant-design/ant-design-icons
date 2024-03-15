// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AntDesignOutlinedSvg from '@ant-design/icons-svg/lib/asn/AntDesignOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AntDesignOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AntDesignOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(AntDesignOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AntDesignOutlined';
}

export default RefIcon;