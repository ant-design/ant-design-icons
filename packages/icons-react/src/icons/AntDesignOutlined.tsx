// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AntDesignOutlinedSvg from '@ant-design/icons-svg/lib/asn/AntDesignOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AntDesignOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AntDesignOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  AntDesignOutlined.displayName = 'AntDesignOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AntDesignOutlined);