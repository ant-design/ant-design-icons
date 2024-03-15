// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SmileOutlinedSvg from '@ant-design/icons-svg/lib/asn/SmileOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SmileOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SmileOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SmileOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SmileOutlined';
}

export default RefIcon;