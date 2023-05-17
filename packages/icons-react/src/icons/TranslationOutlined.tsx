// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TranslationOutlinedSvg from '@ant-design/icons-svg/lib/asn/TranslationOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TranslationOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TranslationOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  TranslationOutlined.displayName = 'TranslationOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TranslationOutlined);