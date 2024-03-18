// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ItalicOutlinedSvg from '@ant-design/icons-svg/lib/asn/ItalicOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ItalicOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ItalicOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ItalicOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ItalicOutlined';
}

export default RefIcon;