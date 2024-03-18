// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import OpenAIOutlinedSvg from '@ant-design/icons-svg/lib/asn/OpenAIOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OpenAIOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OpenAIOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(OpenAIOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'OpenAIOutlined';
}

export default RefIcon;