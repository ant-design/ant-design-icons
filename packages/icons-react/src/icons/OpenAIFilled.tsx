// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import OpenAIFilledSvg from '@ant-design/icons-svg/lib/asn/OpenAIFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OpenAIFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OpenAIFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(OpenAIFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'OpenAIFilled';
}

export default RefIcon;