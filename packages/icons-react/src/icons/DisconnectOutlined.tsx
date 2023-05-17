// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DisconnectOutlinedSvg from '@ant-design/icons-svg/lib/asn/DisconnectOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DisconnectOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DisconnectOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  DisconnectOutlined.displayName = 'DisconnectOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DisconnectOutlined);