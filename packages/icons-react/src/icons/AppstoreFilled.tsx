// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AppstoreFilledSvg from '@ant-design/icons-svg/lib/asn/AppstoreFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AppstoreFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AppstoreFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  AppstoreFilled.displayName = 'AppstoreFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AppstoreFilled);