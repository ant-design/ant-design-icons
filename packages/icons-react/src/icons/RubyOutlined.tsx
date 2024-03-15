// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RubyOutlinedSvg from '@ant-design/icons-svg/lib/asn/RubyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RubyOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RubyOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(RubyOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RubyOutlined';
}

export default RefIcon;