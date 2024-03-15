// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TranslationOutlinedSvg from '@ant-design/icons-svg/lib/asn/TranslationOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TranslationOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TranslationOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(TranslationOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TranslationOutlined';
}

export default RefIcon;