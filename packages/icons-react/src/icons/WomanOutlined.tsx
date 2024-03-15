// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WomanOutlinedSvg from '@ant-design/icons-svg/lib/asn/WomanOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WomanOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WomanOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(WomanOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'WomanOutlined';
}

export default RefIcon;