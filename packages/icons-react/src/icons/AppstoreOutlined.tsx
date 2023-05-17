// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AppstoreOutlinedSvg from '@ant-design/icons-svg/lib/asn/AppstoreOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AppstoreOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AppstoreOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  AppstoreOutlined.displayName = 'AppstoreOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AppstoreOutlined);