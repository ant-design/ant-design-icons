// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ApiTwoToneSvg from '@ant-design/icons-svg/lib/asn/ApiTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ApiTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ApiTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ApiTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ApiTwoTone';
}

export default RefIcon;