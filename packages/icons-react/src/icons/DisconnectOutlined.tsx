// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DisconnectOutlinedSvg from '@ant-design/icons-svg/lib/asn/DisconnectOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DisconnectOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DisconnectOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DisconnectOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DisconnectOutlined';
}

export default RefIcon;