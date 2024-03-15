// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import JavaScriptOutlinedSvg from '@ant-design/icons-svg/lib/asn/JavaScriptOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const JavaScriptOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={JavaScriptOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(JavaScriptOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'JavaScriptOutlined';
}

export default RefIcon;